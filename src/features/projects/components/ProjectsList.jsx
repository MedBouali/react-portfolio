import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"
import { useProjects, ProjectCard } from "@/features/projects"

function ProjectsList() {
    const { projects } = useProjects()

    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {projects.map((project, i) => (
                <motion.div
                    key={project.id}
                    {...fadeIn(0.2 + i * 0.1)}
                >
                    <ProjectCard key={project.id} project={project} />
                </motion.div>
            ))}
        </div>
    )
}

export default ProjectsList