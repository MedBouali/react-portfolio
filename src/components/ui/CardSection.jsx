function CardSection({ children, className = "" }) {
    return (
        <div className={`rounded-2xl bg-secondary/5 p-6 md:p-10 ${className}`}>
            {children}
        </div>
    )
}

export default CardSection