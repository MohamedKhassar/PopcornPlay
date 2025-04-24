import { Link } from "react-router-dom"
import logo from "/imgs/logo.svg"
import SearchInput from "../shared/SearchInput"
import NavLinks from "../shared/NavLinks"
import { TiThMenu } from "react-icons/ti"
import { IoCloseSharp } from "react-icons/io5"
import { useAppDispatch, useAppSelector } from "../../lib/hooks"
import { toggleMenu } from "../../features/menuSlice"

const Navbar = () => {
    const {isOpen}=useAppSelector(state=>state.menu)
    const dispatch=useAppDispatch()
    return (
        <header className="bg-slate-900/10 backdrop-blur-3xl py-7 flex items-center justify-around mx-3">
            <Link to={""} className="flex items-center">
                <img src={logo} alt={logo} loading="lazy" className="size-15" />
                <h1 className="text-2xl font-extrabold hidden lg:block">Popcorn<span className="text-blue-600">Play</span></h1>
            </Link>
            <SearchInput />
            <nav>
                <NavLinks className="max-lg:hidden" />
                <button className="p-2.5 bg-blue-700 rounded-xl active:scale-95 duration-200 hover:bg-blue-800 lg:hidden cursor-pointer active:bg-blue-800 outline-none" onClick={()=>dispatch(toggleMenu())}>
                    {
                        isOpen
                            ?
                            <IoCloseSharp className="size-5" />
                            :
                            <TiThMenu className="size-5" />

                    }
                </button>
            </nav>
        </header>
    )
}

export default Navbar
