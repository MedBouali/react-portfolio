import { SOCIAL_LINKS } from "@/constants/socialLinks"

const baseClass =
    "h-4 w-4 transition duration-300"

const primaryClass =
    "text-white hover:text-primary"

const secondaryClass =
    "text-secondary hover:text-(--text)"

const colors = {
    primary: primaryClass,
    secondary: secondaryClass,
}

function SocialLinks({ color = "primary" }) {
    return (
        <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link) => {
                const Icon = link.icon

                return (
                    <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.ariaLabel}
                        title={link.title}
                    >
                        <Icon className={`${baseClass} ${colors[color]}`} />
                    </a>
                )
            })}
        </div>
    )
}

export default SocialLinks