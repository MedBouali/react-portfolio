import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import useScrollToTop from "@/hooks/useScrollToTop"

function Layout({ children }) {
    useScrollToTop()

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-1">
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout