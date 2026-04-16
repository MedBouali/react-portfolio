import { BadgeList } from "@/components/ui"
import { ProjectLinks } from "@/features/projects"

export default function ProjectCard({ project }) {
    return (
        <div className="bg-secondary/10 rounded-2xl h-full flex flex-col overflow-hidden group transition-all duration-300">
            <div className="p-2">
                <div className="relative rounded-xl overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-400 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent rounded-xl" />

                    <div className="absolute bottom-2 left-2 right-2">
                        <BadgeList items={project.tech} />
                    </div>
                </div>
            </div>

            <div className="px-3 py-2 flex flex-col flex-1">
                <h2 className="text-md font-bold mb-2">
                    {project.title}
                </h2>

                <p className="text-muted-foreground text-sm mb-2">
                    {project.description}
                </p>

                <div className="mt-auto mb-1">
                    <ProjectLinks github={project.github} demo={project.demo} />
                </div>
            </div>
        </div>
    )
}