function FormField({
    as = "input",
    className = "",
    ...props
}) {
    const baseStyles =
        "w-full rounded-lg border border-(--border) bg-transparent px-4 py-3 text-sm outline-none transition duration-300 focus:border-primary"

    if (as === "textarea") {
        return (
            <textarea
                className={`${baseStyles} resize-none ${className}`}
                {...props}
            />
        )
    }

    return (
        <input
            className={`${baseStyles} ${className}`}
            autoComplete="off"
            {...props}
        />
    )
}

export default FormField