import { ProjectForm } from "@/components/ProjectForm";

export default function NewProjectPage() {
    return (
        <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-20 mx-auto">
            <div className="w-full max-w-2xl">
                <h1 className="text-3xl font-bold mb-8 text-center">Create New Project</h1>
                <ProjectForm />
            </div>
        </div>
    );
}
