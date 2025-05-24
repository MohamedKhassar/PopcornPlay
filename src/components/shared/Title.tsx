import { ReactNode } from "react"

const Title = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex items-stretch gap-2">
            <span className="lg:w-1.5 w-1 rounded-full bg-blue-600"></span>
            <h1 className="capitalize lg:text-2xl md:text-xl text-lg"><strong className="lg:gap-4 gap-2 flex items-center">{children}</strong></h1>
        </div>
    )
}

export default Title