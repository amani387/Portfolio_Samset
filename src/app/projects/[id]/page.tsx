import dbConnect from '@/lib/db';
import Project from '@/models/Project';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Calendar, MapPin, Tag } from 'lucide-react';

export default async function ProjectPage(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    await dbConnect();

    let project;
    try {
        project = await Project.findById(params.id);
    } catch (e) {
        notFound();
    }

    if (!project) {
        notFound();
    }

    return (
        <div className="container py-10 md:py-16">
            <div className="mb-8">
                <Button asChild variant="ghost" className="pl-0 hover:pl-0 hover:bg-transparent">
                    <Link href="/projects" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl border bg-muted">
                    <Image
                        src={project.imageUrl || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="flex flex-col gap-6">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h1>
                        <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <Tag className="w-4 h-4" />
                                <span>{project.category}</span>
                            </div>
                            {project.location && (
                                <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    <span>{project.location}</span>
                                </div>
                            )}
                            {project.date && (
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>{new Date(project.date).toLocaleDateString()}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="prose dark:prose-invert max-w-none">
                        <p className="whitespace-pre-wrap leading-relaxed text-muted-foreground">
                            {project.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
