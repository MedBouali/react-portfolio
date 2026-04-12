import { motion } from "framer-motion"
import { useTypingEffect } from "@/features/home"
import { fadeUp } from "@/lib/animations"

function HeroDescription({ text }) {
    const { typedText, fullText } = useTypingEffect(text, 50)

    return (
        <motion.div
            {...fadeUp(0.3, 20, 0.6)}
            className="font-code text-sm leading-relaxed max-w-2xl"
        >
            <span className="relative inline-grid">
                <span className="col-start-1 row-start-1">
                    <span className="text-primary font-medium">{'{ '}</span>
                    <span className="text-foreground opacity-20">{fullText}</span>
                    <span className="text-primary font-medium">{' }'}</span>
                </span>

                <span className="col-start-1 row-start-1">
                    <span className="text-transparent font-medium">{'{ '}</span>
                    <span className="text-foreground">{typedText}</span>
                    <span className="animate-pulse inline-block align-middle -mx-1">|</span>
                    <span className="text-transparent font-medium">{' }'}</span>
                </span>
            </span>
        </motion.div>
    )
}

export default HeroDescription