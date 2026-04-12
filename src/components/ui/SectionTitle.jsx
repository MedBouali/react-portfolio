import { motion } from "framer-motion"
import { fadeUp, fadeIn } from "@/lib/animations"

function SectionTitle({ eyebrow, title }) {
    return (
        <motion.div
            {...fadeUp(0, 20, 0.6)}
            className="mb-8"
        >
            {eyebrow && (
                <motion.p
                    {...fadeIn(0.1, 0.5)}
                    className="mb-2 text-(--text-primary) text-sm font-semibold uppercase tracking-[0.2em]"
                >
                    {eyebrow}
                </motion.p>
            )}
            <motion.h2
                {...fadeUp(0.2, 15, 0.5)}
                className="text-(--text-primary) text-3xl font-bold tracking-tight"
            >
                {title}
            </motion.h2>
        </motion.div>
    )
}

export default SectionTitle