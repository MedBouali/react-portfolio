import { useEffect, useState } from "react"
import { FaMoon, FaSun } from "@/components/ui"

function ThemeToggle() {
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem("theme")
        return savedTheme ? savedTheme === "dark" : true
    })

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark)
        localStorage.setItem("theme", isDark ? "dark" : "light")
    }, [isDark])

    return (
        <button
            type="button"
            onClick={() => setIsDark((prev) => !prev)}
            aria-label="Toggle theme"
            className="rounded-full border border-(--border) p-2 text-secondary transition hover:text-(--text) cursor-pointer"
        >
            {isDark ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
        </button>
    )
}

export default ThemeToggle