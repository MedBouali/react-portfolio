import { Link } from "react-router-dom"

const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-[13px] font-medium text-center transition cursor-pointer"

const variants = {
    primary:
        "bg-primary text-white hover:opacity-90",
    outline:
        "border border-primary text-primary hover:opacity-90"
}

function Button({
    children,
    variant = "primary",
    to,
    className = "",
    ...props
}) {
    const styles = `${baseStyles} ${variants[variant]} ${className}`

    if (to) {
        return (
            <Link to={to} className={styles}>
                {children}
            </Link>
        )
    }

    return (
        <button className={styles} {...props}>
            {children}
        </button>
    )
}

export default Button