import { SOCIAL_LINKS } from "@/constants/socialLinks"

const baseStyles =
    "transition duration-300"

const primaryStyles =
    "text-secondary hover:text-primary"

const secondaryStyles =
    "text-secondary hover:text-(--text)"

const colors = {
    primary: primaryStyles,
    secondary: secondaryStyles,
}

const sizes = {
    sm: "h-3 w-3",
    base: "h-4 w-4",
    lg: "h-5 w-5",
}

function SocialLinks({ color = "primary", size = "base" }) {
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
                        <Icon className={`${baseStyles} ${colors[color]} ${sizes[size]}`} />
                    </a>
                )
            })}
        </div>
    )
}

export default SocialLinks