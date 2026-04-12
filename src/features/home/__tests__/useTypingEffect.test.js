import { renderHook, act } from "@testing-library/react"
import { describe, it, expect, vi } from "vitest"
import useTypingEffect from "../hooks/useTypingEffect"

describe("useTypingEffect", () => {
    it("should start with empty text", () => {
        const { result } = renderHook(() =>
            useTypingEffect("Hello", 50)
        )

        expect(result.current.typedText).toBe("")
    })

    it("should type text over time", () => {
        vi.useFakeTimers()

        const { result } = renderHook(() =>
            useTypingEffect("Hi", 50)
        )

        act(() => {
            vi.advanceTimersByTime(50)
        })
        expect(result.current.typedText).toBe("H")

        act(() => {
            vi.advanceTimersByTime(50)
        })
        expect(result.current.typedText).toBe("Hi")

        vi.useRealTimers()
    })

    it("should reset when text changes", () => {
        vi.useFakeTimers()

        const { result, rerender } = renderHook(
            ({ text }) => useTypingEffect(text, 50),
            { initialProps: { text: "Hello" } }
        )

        act(() => {
            vi.advanceTimersByTime(100)
        })

        expect(result.current.typedText.length).toBeGreaterThan(0)

        rerender({ text: "Hi" })

        expect(result.current.typedText).toBe("")

        vi.useRealTimers()
    })
})