import { Container, SectionTitle } from "@/components/ui"
import { ContactContent } from "@/features/contact"

function Contact() {
    return (
        <Container className="py-16">
            <SectionTitle
                eyebrow="Contact"
                title="Get in touch"
            />
            <div className="p-6">
                <ContactContent />
            </div>
        </Container>
    )
}

export default Contact