function SectionHeader({ title }) {
    return (
        <div className="flex items-center gap-4 my-12 max-w-60 mx-auto">
            <div className="flex-1 h-px bg-primary" />

            <span className="text-sm font-semibold uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                {title}
            </span>

            <div className="flex-1 h-px bg-primary" />
        </div>
    )
}

export default SectionHeader