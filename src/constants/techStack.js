import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaGithub,
    FaBootstrap,
    FaNodeJs,
    FaPhp,
    SiNextdotjs,
    SiTailwindcss,
    RiJavascriptFill,
    DiJava,
    SiPostman,
    SiFramer,
    SiMui,
    SiSymfony,
    SiMysql,
    SiNpm
} from "@/components/ui"

export const TECH_STACK = {
    frontend: [
        { icon: FaReact, name: "React", color: "#61DAFB" },
        { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
        { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
        { icon: RiJavascriptFill, name: "JavaScript", color: "#F7DF1E" },
        { icon: FaHtml5, name: "HTML", color: "#E34C26" },
        { icon: FaCss3Alt, name: "CSS", color: "#1572B6" }
    ],

    ui: [
        { icon: SiFramer, name: "Framer Motion", color: "#0055FF" },
        { icon: SiMui, name: "Material UI", color: "#007FFF" },
        { icon: FaBootstrap, name: "Bootstrap", color: "#7952B3" }
    ],

    backend: [
        { icon: FaNodeJs, name: "Node.js", color: "#339933" },
        { icon: SiSymfony, name: "Symfony", color: "#000000" },
        { icon: FaPhp, name: "PHP", color: "#777BB4" },
        { icon: SiMysql, name: "MySQL", color: "#4479A1" }
    ],

    tools: [
        { icon: FaGitAlt, name: "Git", color: "#F05032" },
        { icon: FaGithub, name: "GitHub", color: "#181717" },
        { icon: SiPostman, name: "Postman", color: "#FF6C37" },
        { icon: SiNpm, name: "npm", color: "#CB3837" }
    ],

    other: [
        { icon: DiJava, name: "JavaFX", color: "#ED8B00" }
    ]
}