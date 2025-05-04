import { ReactNode } from "react"
import Navbar from "./Navbar"
import NavLinks from "../shared/NavLinks"

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <div>
                {children}
            </div>
            <NavLinks className="lg:hidden" />
        </div>
    )
}

export default Layout
