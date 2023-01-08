import { useContext, useState } from "react"
import { Context } from "../contexts/useContext"
import { useDeleteMultipleProductMutation, useGetProductsQuery } from "../graphql/generated"

export const DeleteMultipleProduct = () => {
    // Chama a Função Deleta Multiplos Produtos no GraphCMS
    const [delMutiplesItem] = useDeleteMultipleProductMutation()
    // Estado para Armezana o Tempo de Carregamento da Requisição para O GraphCMS
    const [loadingMutipleDeleteProduct, setLoadingMutipleDeleteProduct] = useState(false)
    // Estado Global das Variaveis
    const { deleteMutipleProduct, setDeleteMutipleProduct, listItem } = useContext(Context)
    // Função que Atualizar a Lista de Produtos
    const { refetch } = useGetProductsQuery()

    // Função Que Recebe da Dados do Formulario
    const delMultipleProduct = async () => {
        setLoadingMutipleDeleteProduct(true)
        delMutiplesItem({
            variables: {
                ids: listItem
            }
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            setLoadingMutipleDeleteProduct(false)
            refetch()
        })
    }


    return (
        <div className='w-fit'>
            {deleteMutipleProduct ?
                <div className='flex gap-4'>
                    <button className='border py-2 px-4 rounded' onClick={() => { delMultipleProduct() }}>{loadingMutipleDeleteProduct ? "Deletando" : "Deletar Todos"}</button>
                    <button className='border py-2 px-4 rounded' onClick={() => { setDeleteMutipleProduct(false) }}>Cancelar</button>
                </div>
                :
                <button className='border py-2 px-4 rounded' onClick={() => { setDeleteMutipleProduct(true) }}>Selecionar Varios</button>
            }
        </div>
    )
}