import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"
import { BadgeList } from "@/components/ui"

function ExperienceItem({ item }) {
    return (
        <div className="space-y-2">
            <motion.h3 className="text-md font-semibold uppercase tracking-wide" {...fadeIn(0.2)}>
                {item.role}{item.company && `, ${item.company}`}
            </motion.h3>

            <motion.p className="text-xs font-medium uppercase" {...fadeIn(0.3)}>
                {item.location}
            </motion.p>

            <motion.p className="text-xs text-muted-foreground" {...fadeIn(0.4)}>
                {item.period}
            </motion.p>

            <motion.ul className="ml-8 mb-3 list-disc space-y-1 text-sm marker:text-primary" {...fadeIn(0.5)}>
                {item.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </motion.ul>

            {item.tech &&
                <motion.div {...fadeIn(0.6)}>
                    <BadgeList items={item.tech} />
                </motion.div>
            }
        </div>
    )
}

export default ExperienceItem