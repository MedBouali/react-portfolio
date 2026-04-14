import { motion } from "framer-motion"
import { TECH_STACK } from "@/constants/techStack"

function TechStackBackground() {
    const items = Object.values(TECH_STACK).flat()

    return (
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
            <div className="grid grid-cols-3 md:grid-cols-6 place-items-center w-full h-full px-1 py-10">
                {items.map((tech, i) => {
                    const Icon = tech.icon

                    const duration = 6 + (i % 5)
                    const delay = (i % 7) * 0.3
                    const isCenter = i % 6 === 2 || i % 6 === 3
                    const scale = isCenter ? 1.1 : 1

                    return (
                        <motion.div
                            key={i}
                            className="flex items-center justify-center aspect-square w-12 h-12 bg-secondary/30 rounded-lg"
                            style={{ scale }}
                            animate={{
                                y: [0, -10, 0],
                                x: [0, 5, 0],
                                rotate: [0, 5, 0],
                            }}
                            transition={{
                                duration,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay,
                            }}
                        >
                            <Icon
                                className="text-2xl"
                                style={{ color: tech.color }}
                            />
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default TechStackBackground