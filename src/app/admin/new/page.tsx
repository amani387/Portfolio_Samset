import { ProjectForm } from "@/components/ProjectForm";

export default function NewProjectPage() {
    return (
        <div className="container py-10 max-w-2xl">
            <h1 className="text-3xl font-bold mb-8">Create New Project</h1>
            <ProjectForm />
        </div>
    );
}
