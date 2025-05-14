import { useLocation } from "react-router-dom"
import { NavItemProps } from "../../lib/types"
import { cn } from "../../lib/cn"

const NavItem = ({ label, href, Icon }: NavItemProps) => {
    const { hash } = useLocation()
    console.log(hash,href)
    return (
        <li className="inline-block max-lg:hover:bg-slate-600/30 max-lg:backdrop-blur-2xl p-3 rounded-lg duration-200">
            <a href={href} className={cn("lg:text-lg text-xs lg:text-white lg:font-semibold lg:hover:text-blue-700 capitalize duration-300 text-center text-slate-500",
                hash == href ? "text-blue-700" : "text-slate-400"
            )}><Icon className={cn("lg:hidden place-self-center size-6",
                hash === "/" && href == "/" && "fill-blue-800"
            )} />{label}</a>
        </li>
    )
}

export default NavItem
