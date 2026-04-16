function BadgeList({ items }) {
    return (
        <div className="flex flex-wrap gap-2">
            {items.map((item) => (
                <span
                    key={item}
                    className="text-[11px] px-2 py-0.5 bg-primary/90 text-gray-100 rounded-full"
                >
                    {item}
                </span>
            ))}
        </div>
    )
}

export default BadgeList