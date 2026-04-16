import { Container, SectionTitle } from "@/components/ui"
import { ProjectsList } from "@/features/projects"

function Projects() {
    return (
        <Container className="py-16">
            <SectionTitle
                eyebrow="Projects"
                title="Selected Work"
            />
            <div className="p-6">
                <ProjectsList />
            </div>
        </Container>
    )
}

export default Projects