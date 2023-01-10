import { Spinner, Trash } from "phosphor-react"
import { useContext, useState } from "react"
import { Context } from "../contexts/useContext"
import { useDeleteProductMutation, useGetAllProductsQuery } from "../graphql/generated"

export const DeleteProduct = ({ item }: any) => {
    // Chama a Função Para Deleta Unico Produtos no GraphCMS
    const [deleteProduct] = useDeleteProductMutation()
    // Estado para Armezana o Tempo de Carregamento da Requisição para O GraphCMS
    const [loadingDeleteProduct, setLoadingDeleteProduct] = useState(false)
    // Estado Global das Variaveis
    const { id, setId } = useContext(Context)
    // Função que Atualizar a Lista de Produtos
    const { refetch } = useGetAllProductsQuery()

    // Função Que Recebe da Dados do Formulario
    const delProduct = async (id: string) => {
        setId(id)
        setLoadingDeleteProduct(true)
        deleteProduct({
            variables: {
                id
            }
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoadingDeleteProduct(false)
            refetch()
        })
    }



    return (
        <button onClick={() => { delProduct(item.id) }} >
            {loadingDeleteProduct && item.id === id ? <Spinner size={20} className="animate-spin" /> : <Trash size={20} />}
        </button>
    )
}