import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"
import { SocialLinks } from "@/components/common"
import { HeroDescription, TechStackBackground } from "@/features/home"
import { Button } from "@/components/ui"

function Hero() {
    const heroHeight = "min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-7.5rem)]"
    const description = "I'm Mohammed Bouali, a junior web developer passionate about building modern, responsive web applications. I work primarily with React, Next.js, and Tailwind CSS, and I enjoy turning ideas into clean, interactive interfaces while continuously improving my skills."

    return (
        <div className={`${heroHeight} relative flex flex-col items-center justify-center space-y-7 overflow-hidden`}>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none blur-[0.3px]">
                <TechStackBackground />
            </div>

            <motion.h1
                {...fadeIn(0.1)}
                className="text-3xl md:text-4xl font-bold text-center"
            >
                Mohammed Bouali
            </motion.h1>

            <motion.h2
                {...fadeIn(0.2)}
                className="text-md md:text-xl font-code text-primary font-medium"
            >
                Junior Web Developer
            </motion.h2>

            <HeroDescription text={description} />

            <motion.div
                {...fadeIn(0.4)}
                className="flex gap-4"
            >
                <Button to="/projects" variant="primary">
                    View My Projects
                </Button>

                <Button to="/contact" variant="outline">
                    Get In Touch
                </Button>
            </motion.div>

            <motion.div
                {...fadeIn(0.5)}
                className="py-3"
            >
                <SocialLinks size="lg" />
            </motion.div>
        </div>
    )
}

export default Hero