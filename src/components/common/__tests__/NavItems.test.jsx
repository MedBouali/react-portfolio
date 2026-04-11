import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import NavItems from "../NavItems"

describe("NavItems", () => {
    test("renders navigation links", () => {
        render(
            <MemoryRouter>
                <NavItems />
            </MemoryRouter>
        )

        expect(screen.getByText(/home/i)).toBeInTheDocument()
        expect(screen.getByText(/projects/i)).toBeInTheDocument()
    })

    test("renders all nav links", () => {
        render(
            <MemoryRouter>
                <NavItems />
            </MemoryRouter>
        )

        const links = screen.getAllByRole("link")
        expect(links.length).toBeGreaterThan(0)
    })
})