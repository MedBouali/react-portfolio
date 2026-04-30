function Alert({ type = "info", children, className = "" }) {
    const base = "text-sm text-center rounded-md px-4 py-2"

    const variants = {
        success: "text-green-600 bg-green-500/10",
        error: "text-red-600 bg-red-500/10",
        info: "text-muted-foreground bg-muted/50",
    }

    return (
        <div className={`${base} ${variants[type]} ${className}`}>
            {children}
        </div>
    )
}

export default Alert