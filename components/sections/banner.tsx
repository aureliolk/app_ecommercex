import Router from "next/router"

interface BannerProps {
    title?: string
    bg?: string
    backState?: boolean
}

export const Banner = ({ title, bg, backState }: BannerProps) => {
    const { back } = Router
    return (
        <div className="flex flex-col">
            <div className={`h-80 w-full flex-col text-white flex text-4xl font-bold p-2 ${bg}`}>
                {backState && <button onClick={back} className="h-fit text-sm w-fit hover:underline">Voltar</button>}
                <div className="flex items-center justify-center h-full">
                    {title}
                </div>
            </div>
        </div>
    )
}