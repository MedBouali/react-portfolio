function ProjectLinks({ github, demo }) {
    return (
        <div className="flex gap-4 text-sm">
            {github && (
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline transition-all duration-300"
                >
                    Github
                </a>
            )}

            {demo && (
                <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline transition-all duration-300"
                >
                    Live
                </a>
            )}
        </div>
    )
}

export default ProjectLinks