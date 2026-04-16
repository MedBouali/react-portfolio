import { useMemo } from "react"
import { PROJECTS_DATA } from "@/features/projects"

export default function useProjects() {
    const projects = useMemo(() => PROJECTS_DATA, [])

    return { projects }
}