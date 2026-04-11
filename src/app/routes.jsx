import Home from "@/pages/Home"
import About from "@/pages/About"
import Projects from "@/pages/Projects"
import Resume from "@/pages/Resume"
import Contact from "@/pages/Contact"

export const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/projects", element: <Projects /> },
    { path: "/resume", element: <Resume /> },
    { path: "/contact", element: <Contact /> },
]