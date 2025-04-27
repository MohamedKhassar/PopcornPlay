import { Link, useLocation } from "react-router-dom"
import { NavItemProps } from "../../lib/types"
import { cn } from "../../lib/cn"

const NavItem = ({ label, href,Icon }: NavItemProps) => {
    const {pathname}=useLocation()
    return (
        <li className="inline-block max-lg:hover:bg-slate-600/30 max-lg:backdrop-blur-2xl p-3 rounded-lg duration-200">
            <Link to={href} className={cn("lg:text-lg text-xs lg:text-white lg:font-semibold lg:hover:text-blue-700 capitalize duration-300 text-center text-slate-500",
                pathname === href ? "text-blue-700" : "text-slate-400"
            )}><Icon className={cn("lg:hidden place-self-center size-6",
                pathname === "/"&&href=="/" && "fill-blue-800"
            )} />{label}</Link>
        </li>
    )
}

export default NavItem
