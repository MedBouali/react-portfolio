import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"

function CertificationsList({ certifications }) {
    return (
        <div className="space-y-3">
            {certifications.map((cert, i) => (
                <motion.div key={cert.name} {...fadeIn(0.2 + i * 0.1)}>
                    <p className="text-sm font-medium">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">
                        {cert.issuer} • {cert.date}
                    </p>
                </motion.div>
            ))}
        </div>
    )
}

export default CertificationsList