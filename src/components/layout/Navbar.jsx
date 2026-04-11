import { useState, useEffect } from "react"
import {
    SocialLinks,
    NavItems,
    ThemeToggle
} from "@/components/common"
import {
    AiOutlineMenu,
    IoIosClose
} from "@/components/ui"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    const navClassName = `hidden md:block sticky top-0 z-40 py-1 bg-(--surface) border-b ${isSticky ? "border-(--border)" : "border-transparent"}`

    useEffect(() => {
        const handleScroll = () => {
            const shouldBeSticky = window.scrollY > 50
            setIsSticky(prev => (prev !== shouldBeSticky ? shouldBeSticky : prev))
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <header className="top-0 z-50 bg-(--background)">
                <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-6 pt-4">
                    <div className="justify-self-start">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            <AiOutlineMenu className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="flex justify-center">
                        <div className="hidden md:block">
                            <SocialLinks color="secondary" />
                        </div>
                    </div>

                    <div className="justify-self-end flex items-center gap-3">
                        <div className="md:hidden">
                            <SocialLinks color="secondary" />
                        </div>

                        <div className="md:hidden h-4 bg-(--border) w-px mx-2" />

                        <ThemeToggle />
                    </div>

                </div>
            </header>

            <div className={navClassName}>
                <nav className="flex items-center justify-center gap-8 text-[15px] py-4 transition-all">
                    <NavItems />
                </nav>
            </div>

            <div
                className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                onClick={() => setIsOpen(false)}
            />

            <div
                className={`fixed top-2 left-2 right-2 bottom-2 z-50 md:hidden transform transition-transform duration-300 ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
            >
                <div className="border border-(--border) rounded-xl bg-(--background) backdrop-blur overflow-hidden">
                    <div className="px-4 py-4 h-full flex flex-col">
                        <div className="flex justify-end mb-2">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="cursor-pointer text-secondary rounded-full transition-all hover:text-(--text)"
                                aria-label="Close menu"
                            >
                                <IoIosClose className="h-7 w-7" />
                            </button>
                        </div>

                        <nav className="flex flex-col gap-4 text-[15px]">
                            <NavItems onClick={() => setIsOpen(false)} mobile />
                        </nav>

                        <div className="self-center mt-auto">
                            <div className="h-px bg-(--border) w-full my-4" />
                            <SocialLinks color="secondary" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar