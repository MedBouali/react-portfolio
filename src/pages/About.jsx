import { Container, SectionTitle } from "@/components/ui"

function About() {
    return (
        <Container className="py-16">
            <SectionTitle
                eyebrow="About"
                title="Who I Am"
            />
            <div className="rounded-2xl p-6">
                About
            </div>
        </Container>
    )
}

export default About