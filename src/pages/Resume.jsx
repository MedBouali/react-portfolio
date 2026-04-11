import { Container, SectionTitle } from "@/components/ui"

function Resume() {
    return (
        <Container className="py-16">
            <SectionTitle
                eyebrow="Resume"
                title="Overview"
            />
            <div className="rounded-2xl p-6">
                Resume
            </div>
        </Container>
    )
}

export default Resume