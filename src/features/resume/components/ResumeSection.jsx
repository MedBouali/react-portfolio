import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"

function ResumeSection({ title, children }) {
    return (
        <motion.div className="space-y-6" {...fadeIn(0.3)}>
            <h2 className="relative uppercase tracking-wider w-fit pb-1 text-xl font-semibold after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-1/3 after:bg-primary after:content-['']">
                {title}
            </h2>

            {children}
        </motion.div>
    )
}

export default ResumeSection