import { ReactNode } from "react"
import Navbar from "./Navbar"
import NavLinks from "../shared/NavLinks"
import Footer from "./Footer"

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div>
                {children}
            </div>
            <NavLinks className="lg:hidden" />
            <Footer />
        </div>
    )
}

export default Layout
