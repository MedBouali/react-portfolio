import { Container, SectionTitle } from "@/components/ui"
import { TechStack } from "@/features/skills"

function Skills() {
    return (
        <Container className="py-16">
            <SectionTitle
                eyebrow="Skills"
                title="Tech Stack"
            />
            
            <section className="p-6">
                <TechStack />
            </section>
        </Container>
    )
}

export default Skills