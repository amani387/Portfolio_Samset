import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IProject } from "@/models/Project";
import { MapPin, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Partial<IProject> & { _id: string };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group overflow-hidden flex flex-col h-full border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20">
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <Image
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title || "Project Image"}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start gap-2">
          <CardTitle className="line-clamp-1 text-xl font-bold group-hover:text-primary transition-colors">{project.title}</CardTitle>
          <div className="inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
            {project.category}
          </div>
        </div>
        <CardDescription className="line-clamp-2 text-sm mt-2">{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow pb-3">
        {project.location && (
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary/70" />
            <span>{project.location}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild className="w-full group/btn" variant="secondary">
          <Link href={`/projects/${project._id}`}>
            View Details <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
