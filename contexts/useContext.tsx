import { createContext, useState } from "react";

interface useContext {
    edit: boolean
    setEdit: (data:boolean) => void
    deleteMutipleProduct: boolean
    setDeleteMutipleProduct: (data:boolean) => void
    id: string
    setId: (data:string) => void
    listItem: any
    
}

export const  Context = createContext({} as useContext)

export const ContextProvider = ({ children }: any) => {
    const [edit, setEdit] = useState(true)
    const [id, setId] = useState("")
    const [deleteMutipleProduct, setDeleteMutipleProduct] = useState(false)
    var listItem =  [] as any



    return (
        <Context.Provider value={{edit,id, deleteMutipleProduct,listItem , setEdit,setId, setDeleteMutipleProduct}}>
            {children}
        </Context.Provider>
    )


}