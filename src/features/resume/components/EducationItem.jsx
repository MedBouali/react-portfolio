import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"

function EducationItem({ education }) {
    return (
        <div className="space-y-1">
            <motion.h3 className="text-md font-semibold uppercase tracking-wide" {...fadeIn(0.2)}>
                {education.degree}
            </motion.h3>

            <motion.p className="text-sm" {...fadeIn(0.3)}>
                {education.school}
            </motion.p>

            <motion.p className="text-sm text-muted-foreground" {...fadeIn(0.4)}>
                {education.location}
            </motion.p>
        </div>
    )
}

export default EducationItem