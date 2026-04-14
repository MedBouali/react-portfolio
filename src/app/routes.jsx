import { Home, About, Projects, Resume, Contact, Skills } from "@/pages"

export const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/skills", element: <Skills /> },
    { path: "/projects", element: <Projects /> },
    { path: "/resume", element: <Resume /> },
    { path: "/contact", element: <Contact /> },
]