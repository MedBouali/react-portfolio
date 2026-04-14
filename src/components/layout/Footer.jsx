import { SocialLinks, NavItems } from "@/components/common"

function Footer() {
    return (
        <footer className="border-t border-(--border) bg-(--background)">
            <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-(--text-primary) text-sm">
                        © {new Date().getFullYear()} Mohammed Bouali
                    </h2>
                    <p className="text-(--text-secondary) text-xs mt-1">
                        Built with React & Tailwind CSS
                    </p>
                </div>

                <nav className="hidden md:flex flex-wrap items-center justify-center gap-6 text-sm">
                    <NavItems />
                </nav>

                <SocialLinks color="secondary" />
            </div>
        </footer>
    )
}

export default Footer