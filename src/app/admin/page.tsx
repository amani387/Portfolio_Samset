import dbConnect from '@/lib/db';
import Project from '@/models/Project';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Pencil } from 'lucide-react';
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <Button asChild>
                    <Link href="/admin/new">
                        <Plus className="mr-2 h-4 w-4" /> Create Project
                    </Link>
                </Button>
            </div >

    <div className="grid gap-4">
        {projects.length === 0 ? (
            <p className="text-muted-foreground text-center py-10">No projects found (or database unavailable). Create one to get started.</p>
        ) : (
            projects.map((project) => (
                <Card key={project._id.toString()}>
                    <CardContent className="flex items-center justify-between p-6">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded bg-muted overflow-hidden relative">
                                {project.imageUrl ? (
                                    <img src={project.imageUrl} alt={project.title} className="h-full w-full object-cover" />
                                ) : (
                                    <div className="h-full w-full bg-gray-200" />
                                )}
                            </div>
                            <div>
                                <h3 className="font-semibold">{project.title}</h3>
                                <p className="text-sm text-muted-foreground">{project.category}</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" size="icon" asChild>
                                <Link href={`/admin/edit/${project._id}`}>
                                    <Pencil className="h-4 w-4" />
                                </Link>
                            </Button>
                            <DeleteButton id={project._id.toString()} />
                        </div>
                    </CardContent>
                </Card>
            ))
        )}
    </div>
        </div >
    );
}
