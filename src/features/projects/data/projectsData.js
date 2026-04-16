import portfolioImg from "@/assets/images/projects/portfolio.png"
import watchwiseImg from "@/assets/images/projects/watchwise.png"
import caffeineLogImg from "@/assets/images/projects/caffeinelog.png"
import momentumImg from "@/assets/images/projects/momentum.png"
import webCalculatorImg from "@/assets/images/projects/calculator.png"
import sketchBoardImg from "@/assets/images/projects/sketchboard.png"

export const PROJECTS_DATA = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "Personal portfolio built with React and Tailwind CSS.",
        tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "Framer Motion"],
        image: portfolioImg,
        github: "https://github.com/MedBouali/react-portfolio",
        demo: "https://mohammedbouali.vercel.app/",
    },
    {
        id: 2,
        title: "WatchWise",
        description: "A movie discovery web app that lets users browse, search, and explore films with a clean and responsive interface.",
        tech: ["React", "Vite", "Tailwind CSS", "JavaScript", "Firebase"],
        image: watchwiseImg,
        github: "https://github.com/MedBouali/movie-watchlist-react",
        demo: "https://watchwise-app.netlify.app/",
    },
    {
        id: 3,
        title: "CaffeineLog",
        description: "A simple tracking app to monitor daily caffeine intake and help users stay within healthy limits.",
        tech: ["React", "Vite", "HTML5", "CSS3", "JavaScript", "Firebase"],
        image: caffeineLogImg,
        github: "https://github.com/MedBouali/caffeine-tracker-react",
        demo: "https://caffeinelog.netlify.app/",
    },
    {
        id: 4,
        title: "Momentum",
        description: "A minimalist todo list app designed to help users stay focused and organized with a clean and distraction-free interface.",
        tech: ["React", "Vite", "HTML5", "CSS3", "JavaScript"],
        image: momentumImg,
        github: "https://github.com/MedBouali/todo-list-react",
        demo: "https://momentum-todo-list.netlify.app/",
    },
    {
        id: 5,
        title: "Web Calculator",
        description: "A simple and responsive calculator that performs basic arithmetic operations with a clean user interface.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        image: webCalculatorImg,
        github: "https://github.com/MedBouali/calculator",
        demo: "https://medbouali.github.io/calculator/",
    },
    {
        id: 6,
        title: "Sketch Board",
        description: "An interactive drawing application built with vanilla JavaScript, demonstrating DOM manipulation, event handling, and dynamic grid rendering.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        image: sketchBoardImg,
        github: "https://github.com/MedBouali/Etch-a-Sketch",
        demo: "https://medbouali.github.io/Etch-a-Sketch/",
    },
]