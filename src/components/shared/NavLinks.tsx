import { cn } from "../../lib/cn"
import { navLinks } from "../../lib/data"
import { useAppSelector } from "../../lib/hooks"
import NavItem from "./NavItem"

const NavLinks = ({ className = "" }: { className?: string }) => {
    const isOpen = useAppSelector(state => state.menu.isOpen)
    return (
        <ul className={cn("flex lg:static lg:opacity-100 lg:visible z-50 sticky top-full transition-[visibility_filter_box-shadow_opacity] duration-600 right-0 left-0 lg:items-center gap-8 p-1.5 justify-around max-lg:bg-slate-900 border-t border-slate-700 lg:border-none lg:gap-10 lg:p-0 lg:rounded-none rounded-t-2xl lg:drop-shadow-none drop-shadow-2xl drop-shadow-blue-200",
            isOpen ? "opacity-100 visible" : "invisible opacity-0",
            className,
        )}>
            {
                navLinks.map((link, index) => (
                    <NavItem Icon={link.Icon} href={link.href} label={link.label} key={index} />
                ))
            }
        </ul>
    )
}

export default NavLinks
