import { ReactNode } from "react"
import Navbar from "./Navbar"
import NavLinks from "../shared/NavLinks"

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Navbar />
            <div>
                {children}
            </div>
            <NavLinks className="lg:hidden" />
        </>
    )
}

export default Layout
