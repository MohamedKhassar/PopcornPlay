import { GoHomeFill } from "react-icons/go"
import { NavItemProps } from "./types"
import { LuFilm, LuTv } from "react-icons/lu"
export const navLinks:NavItemProps[] = [
    {
        label: "board",
        href: "/",
        Icon:GoHomeFill
    },
    {
        label: "movies",
        href: "/movies",
        Icon:LuFilm
    },
    {
        label: "series",
        href: "/series",
        Icon:LuTv
    }
]