import { FormEvent, useEffect, useState } from "react";
import { BiSearch, BiX } from "react-icons/bi"
import { useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../lib/hooks";
import { clearSearch, fetchSearchResults } from "../../features/querySlice";

const SearchInput = () => {
  const router = useNavigate()
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim().length > 1) {
      dispatch(fetchSearchResults(searchTerm));
    }
  };
  const { pathname } = useLocation()
  useEffect(() => {
    if (pathname === "/search") {
      dispatch(clearSearch())
    } else {
      setSearchTerm("");
    }
  }, [pathname])

  const reset = () => {
    setSearchTerm("");
    dispatch(clearSearch());
    router("/search");
  }
  return (
    <form onSubmit={handelSubmit} className="flex items-center gap-2 text-blue-100 rounded-full md:w-100 bg-white/30 justify-between relative mx-3">
      <input onClick={() => router("/search")} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search..." type="text" name="" id="" className="py-3 px-6 outline-none rounded-full w-full md:text-base text-sm placeholder:font-bold" />
      {!searchTerm ? <BiSearch className="size-5 absolute right-5 -z-10" /> : <BiX className="size-7 cursor-pointer absolute right-5 z-10" onClick={reset} />}
    </form>)
}

export default SearchInput
