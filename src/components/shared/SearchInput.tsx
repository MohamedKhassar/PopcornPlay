import { BiSearch } from "react-icons/bi"
import { useNavigate } from "react-router-dom"

const SearchInput = () => {
  const router=useNavigate()
  return (
    <div className="flex items-center gap-2 text-blue-200 rounded-full md:w-100 bg-white/10 justify-between relative mx-3">
      <input onClick={()=>router("/search")} placeholder="Search..." type="text" name="" id="" className="py-3 px-6 outline-none rounded-full w-full md:text-base text-sm placeholder:font-bold" />
      <BiSearch className="size-5 absolute right-5 -z-10" />
    </div>)
}

export default SearchInput
