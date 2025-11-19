import dbConnect from '@/lib/db';
import Project from '@/models/Project';
import ProjectCard from '@/components/ProjectCard';

export const dynamic = 'force-dynamic';

export default async function ProjectsPage() {
    await dbConnect();
    const projects = await Project.find({}).sort({ createdAt: -1 });

    return (
        <div className="min-h-screen bg-muted/30 mx-auto">
            <div className="bg-slate-950 text-white py-20 md:py-24 mx-auto">
                <div className="container px-4 md:px-6 text-center space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Projects</h1>
                    <p className="mx-auto max-w-[700px] text-slate-400 md:text-xl">
                        Explore our portfolio of successful engineering and construction projects.
                    </p>
                </div>
            </div>

            <div className="container px-4 md:px-6 py-12 md:py-20 mx-auto">
                {projects.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center bg-background rounded-2xl border border-dashed border-border shadow-sm">
                        <div className="p-4 rounded-full bg-muted mb-4">
                            <svg className="w-10 h-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">No Projects Found</h3>
                        <p className="text-muted-foreground max-w-sm">
                            We haven&apos;t added any projects to the database yet. Check back soon!
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard key={project._id.toString()} project={JSON.parse(JSON.stringify(project))} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
