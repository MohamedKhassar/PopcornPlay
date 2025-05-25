import { Link } from 'react-router-dom'
import logo from "/imgs/logo.png"

const Footer = () => {
    return (
        <footer className='bg-blue-950 rounded-t-2xl lg:py-6 py-4 px-10 flex flex-wrap items-center md:justify-between justify-center gap-4 w-full mt-5 sticky bottom-0 z-50'>
            <Link to={""} className="flex items-center">
                <img src={logo} alt={logo} loading="lazy" className="lg:size-15 size-10" />
                <h1 className="text-2xl font-extrabold">Popcorn<span className="text-blue-600">Play</span></h1>
            </Link>
            <section className='flex flex-col gap-2 items-start'>
                <p className='text-center text-gray-400 lg:test-base text-sm'>
                    &copy; {new Date().getFullYear()} <strong className='text-white'>Popcorn<span className='text-blue-600'>Play</span></strong>. All rights reserved.
                </p>
                <p className='text-center text-gray-400 lg:test-base text-sm'>
                    Made with ❤️ by <Link to="https://mohamed-khassar.vercel.app" className='text-blue-600 hover:underline' target="_blank">Mohamed Khassar</Link>
                </p>
            </section>
        </footer>
    )
}

export default Footer