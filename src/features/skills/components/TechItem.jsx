function TechItem({ icon, name, color }) {
    const Icon = icon

    return (
        <div className="flex flex-col items-center gap-2 w-22 text-muted-foreground">
            <div className="flex items-center justify-center w-12 h-12 text-2xl bg-secondary/20 rounded-lg transition-all duration-300 hover:-translate-y-1">
                <Icon style={{ color }} />
            </div>

            <span className="text-xs text-center">
                {name}
            </span>
        </div>
    )
}

export default TechItem