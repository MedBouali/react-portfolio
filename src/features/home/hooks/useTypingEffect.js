/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react"

export default function useTypingEffect(text, speed = 70) {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setIndex(0)
    }, [text])

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setIndex((prev) => prev + 1)
            }, speed)

            return () => clearTimeout(timeout)
        }
    }, [index, text, speed])

    return {
        typedText: text.slice(0, index),
        fullText: text
    }
}