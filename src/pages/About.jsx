import { Container, SectionTitle } from "@/components/ui"
import { AboutContent } from "@/features/about"

function About() {
    return (
        <Container className="py-16">
            <SectionTitle
                eyebrow="About"
                title="Who I Am"
            />
            
            <section className="p-6">
                <AboutContent />
            </section>
        </Container>
    )
}

export default About