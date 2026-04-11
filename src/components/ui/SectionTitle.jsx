import { motion } from "framer-motion"

function SectionTitle({ eyebrow, title }) {
    return (
        <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {eyebrow && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="mb-2 text-(--text-primary) text-sm font-semibold uppercase tracking-[0.2em]"
                >
                    {eyebrow}
                </motion.p>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-(--text-primary) text-3xl font-bold tracking-tight"
            >
                {title}
            </motion.h2>
        </motion.div>
    )
}

export default SectionTitle