import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"
import { TECH_STACK } from "@/constants/techStack"
import { SectionHeader, TechItem } from "@/features/skills"

function TechStack() {
    return (
        <div className="space-y-12">
            {Object.entries(TECH_STACK).map(([group, items], i) => (
                <motion.div key={group} {...fadeIn(0.2 + i * 0.1)}>
                    <SectionHeader title={group} />

                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-6">
                        {items.map((tech, index) => (
                            <TechItem key={index} {...tech} />
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default TechStack