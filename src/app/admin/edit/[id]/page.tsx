import dbConnect from '@/lib/db';
import Project from '@/models/Project';
import { ProjectForm } from "@/components/ProjectForm";
import { notFound } from "next/navigation";

export default async function EditProjectPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    await dbConnect();
    const project = await Project.findById(params.id);

    if (!project) {
        notFound();
    }

    return (
        <div className="container py-10 max-w-2xl">
            <h1 className="text-3xl font-bold mb-8">Edit Project</h1>
            <ProjectForm initialData={JSON.parse(JSON.stringify(project))} />
        </div>
    );
}
