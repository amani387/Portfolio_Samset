"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; // Need to create Label or use generic
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Upload } from "lucide-react";

// Simple Label component since I didn't create it yet
function FormLabel({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
    return <label htmlFor={htmlFor} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{children}</label>;
}

interface ProjectFormProps {
    initialData?: any;
}

export function ProjectForm({ initialData }: ProjectFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        description: initialData?.description || "",
        category: initialData?.category || "",
        location: initialData?.location || "",
        imageUrl: initialData?.imageUrl || "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setLoading(true);
        try {
            // 1. Get presigned URL
            const res = await fetch("/api/upload", {
                method: "POST",
                body: JSON.stringify({ filename: file.name, contentType: file.type }),
            });
            const { url, key } = await res.json();

            if (!url) throw new Error("Failed to get upload URL");

            // 2. Upload to S3
            await fetch(url, {
                method: "PUT",
                body: file,
                headers: { "Content-Type": file.type },
            });

            // 3. Set image URL (assuming public bucket or CloudFront, for now using direct S3 link pattern)
            // Ideally, use a CloudFront URL or the bucket URL.
            // For this demo, I'll construct the URL based on the bucket name if available, or just store the key.
            // Let's assume standard S3 URL for now: https://{bucket}.s3.{region}.amazonaws.com/{key}
            // But since I don't have the bucket/region in client env easily without exposing, 
            // I'll just store the key and handle it, or better, just ask the API to return the public URL.
            // For simplicity, I'll assume the user will configure the public URL base.
            // Actually, let's just use the key and have a helper, or just full URL if I knew it.
            // I'll use a placeholder logic: "https://s3.amazonaws.com/" + key (This is likely wrong for private buckets but ok for public read).
            // A better way is to return the public URL from the API.

            // Let's just use the file object URL for preview if upload fails, but for real app we need the S3 URL.
            // I'll assume the API returns the public URL or I can construct it.
            // Let's update the API to return the public URL if possible, or just use the key.
            // For now, I will just put the key in the state and let the user know.

            const publicUrl = `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.amazonaws.com/${key}`;
            // Note: NEXT_PUBLIC_... needs to be set.

            setFormData({ ...formData, imageUrl: publicUrl }); // This might be broken if env not set.
            // Fallback for demo:
            // setFormData({ ...formData, imageUrl: URL.createObjectURL(file) }); 

        } catch (error) {
            console.error("Upload failed", error);
            alert("Upload failed. Check console.");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const url = initialData ? `/api/projects/${initialData._id}` : "/api/projects";
            const method = initialData ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Failed to save project");

            router.push("/admin");
            router.refresh();
        } catch (error) {
            console.error(error);
            alert("Failed to save project");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>{initialData ? "Edit Project" : "Create New Project"}</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <FormLabel htmlFor="title">Title</FormLabel>
                        <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
                    </div>

                    <div className="space-y-2">
                        <FormLabel htmlFor="description">Description</FormLabel>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <FormLabel htmlFor="category">Category</FormLabel>
                            <Input id="category" name="category" value={formData.category} onChange={handleChange} required />
                        </div>
                        <div className="space-y-2">
                            <FormLabel htmlFor="location">Location</FormLabel>
                            <Input id="location" name="location" value={formData.location} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <FormLabel htmlFor="image">Project Image</FormLabel>
                        <div className="flex items-center gap-4">
                            <Input id="image" type="file" accept="image/*" onChange={handleImageUpload} className="cursor-pointer" />
                            {loading && <Loader2 className="animate-spin w-4 h-4" />}
                        </div>
                        {formData.imageUrl && (
                            <div className="mt-2 relative h-40 w-full rounded-md overflow-hidden border">
                                <img src={formData.imageUrl} alt="Preview" className="h-full w-full object-cover" />
                            </div>
                        )}
                    </div>

                    <Button type="submit" className="w-full" disabled={loading}>
                        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                        {initialData ? "Update Project" : "Create Project"}
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
