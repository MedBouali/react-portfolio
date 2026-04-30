import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export default function useContactForm() {
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )

            setSuccess(true)
            formRef.current.reset()

            setTimeout(() => setSuccess(false), 4000)
        } catch (err) {
            console.error("EmailJS error:", err)
            setError(err?.text || "Something went wrong. Try again.")
        } finally {
            setLoading(false)
        }
    }

    return {
        formRef,
        loading,
        success,
        error,
        handleSubmit,
    }
}