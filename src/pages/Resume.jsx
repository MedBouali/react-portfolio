import { Container, SectionTitle } from "@/components/ui"
import { ResumeContent } from "@/features/resume"

function Resume() {
    return (
        <Container className="py-16">
            <SectionTitle
                eyebrow="Resume"
                title="Overview"
            />

            <div className="p-6 ">
                <ResumeContent />
            </div>
        </Container>
    )
}

export default Resume