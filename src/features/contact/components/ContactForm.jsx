import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"
import { Button, FormField, Alert } from "@/components/ui"
import { useContactForm } from "@/features/contact"

function ContactForm() {
    const { formRef, loading, success, error, handleSubmit } = useContactForm()

    return (
        <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mx-auto space-y-4"
            {...fadeIn(0.3)}
        >
            {success && (
                <Alert type="success">
                    Message sent successfully.
                </Alert>
            )}

            {error && (
                <Alert type="error">
                    {error}
                </Alert>
            )}

            <FormField
                name="name"
                type="text"
                placeholder="Your name"
                required
            />

            <FormField
                name="email"
                type="email"
                placeholder="Your email"
                required
            />

            <FormField
                as="textarea"
                name="message"
                rows="6"
                placeholder="Your message"
                required
            />

            <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Sending..." : "Send Message"}
            </Button>
        </motion.form>
    )
}

export default ContactForm