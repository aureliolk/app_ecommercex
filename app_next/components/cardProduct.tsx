import { useContext } from "react"
import { Context } from "../contexts/useContext"
import { DeleteProduct } from "./deleteProduct"

export const CardProduct = ({ item }: any) => {
    const {deleteMutipleProduct, listItem} = useContext(Context)
    
    return (
        <div key={item.id} className={item.active ? "flex flex-col border w-40 p-2 rounded relative bg-green-400" : "flex flex-col border w-40 p-2 rounded relative bg-red-400"}>
            <div>Nome: {item.name}</div>
            <div>Valor: {item.value}</div>
            <div>Status: {item.active === true ? "Ativo" : "Desativado"}</div>
        </div>
    )
}