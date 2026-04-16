import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"
import { ABOUT_CONTENT, AboutSection } from "@/features/about"

export default function AboutContent() {
    return (
        <div className="text-center space-y-8 max-w-3xl mx-auto">
            {ABOUT_CONTENT.map((text, i) => (
                <motion.div key={i} {...fadeIn(0.2 + i * 0.1)}>
                    <AboutSection>
                        {text}
                    </AboutSection>
                </motion.div>
            ))}
        </div>
    )
}