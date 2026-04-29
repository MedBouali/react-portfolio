import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"
import { ABOUT_CONTENT, AboutSection } from "@/features/about"
import { CardSection } from "@/components/ui"

export default function AboutContent() {
    return (
        <CardSection className="text-center space-y-8 mx-auto">
            {ABOUT_CONTENT.map((text, i) => (
                <motion.div key={i} {...fadeIn(0.2 + i * 0.1)}>
                    <AboutSection>
                        {text}
                    </AboutSection>
                </motion.div>
            ))}
        </CardSection>
    )
}