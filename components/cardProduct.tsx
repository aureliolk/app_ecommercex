interface CardProductProps {
    item: {
        id: string
        value: number
        active: boolean
        name: string
    }
}

export const CardProduct = ({ item }: CardProductProps) => {
    return (
        <div key={item.id} className={item.active ? "flex border p-4 rounded relative bg-green-500" : "flex border p-4 rounded relative bg-red-500"}>
            <div className="w-1/2">ThumbNail</div>
            <div className="w-1/2 bg-white p-1 rounded">
                <div className="flex flex-col gap-0">
                    <span className="text-xs leading-none">Nome:</span>
                     <span className="font-bold text-sm">{item.name}</span>
                </div>
                <div className="flex flex-col gap-0">
                    <span className="text-xs leading-none">Valor:</span>
                    <span className="font-bold text-sm">{item.value}</span>
                </div>
                <div className="flex flex-col gap-0">
                    <span className="text-xs leading-none">Status:</span>
                    <span className="font-bold text-sm">{item.active === true ? "Ativo" : "Desativado"}</span>
                </div>
            </div>
        </div>
    )
}