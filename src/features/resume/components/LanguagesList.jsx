import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"

function LanguagesList({ languages }) {
    return (
        <div className="space-y-3">
            {languages.map((lang, i) => (
                <motion.div key={lang.name} className="text-sm" {...fadeIn(0.2 + i * 0.1)}>
                    <p className="text-md font-semibold uppercase tracking-wide">{lang.name}</p>
                    <p className="text-muted-foreground">{lang.level}</p>
                </motion.div>
            ))}
        </div>
    )
}

export default LanguagesList