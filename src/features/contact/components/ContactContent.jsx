import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"
import { ContactForm } from "@/features/contact"

function ContactContent() {
    return (
        <div className="mx-auto w-full max-w-xl text-center space-y-4">
            <motion.p
                className="text-sm text-muted-foreground leading-relaxed"
                {...fadeIn(0.3)}
            >
                Open to opportunities and collaborations.
                <br />
                Send a message and I'll get back to you soon.
            </motion.p>

            <ContactForm />
        </div>
    )
}

export default ContactContent