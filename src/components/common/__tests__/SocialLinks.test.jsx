import { render, screen } from "@testing-library/react"
import SocialLinks from "../SocialLinks"

describe("SocialLinks", () => {
    test("renders social links", () => {
        render(<SocialLinks />)

        const links = screen.getAllByRole("link")
        expect(links.length).toBeGreaterThan(0)
    })

    test("has external links with target _blank", () => {
        render(<SocialLinks />)

        const links = screen.getAllByRole("link")

        links.forEach((link) => {
            expect(link).toHaveAttribute("target", "_blank")
            expect(link).toHaveAttribute("rel", "noopener noreferrer")
        })
    })
})