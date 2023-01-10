import { useContext, useState } from "react"
import { Context } from "../contexts/useContext"
import { useGetAllProductsQuery, useUpdateProductMutation } from "../graphql/generated"



export const FormEditProduct = ({ item }: any) => {
  // Chama a Função Para Editar Produtos no GraphCMS
  const [updateProduct] = useUpdateProductMutation()
  // Estado para Armezana o Tempo de Carregamento da Requisição para O GraphCMS
  const [loadingUpdateProduct, setLoadingUpdateProduct] = useState(false)
  // Estado Global das Variaveis
  const { setEdit } = useContext(Context)
  // Função que Atualizar a Lista de Produtos
  const { refetch } = useGetAllProductsQuery()

  // Funçao Para Atualizar Produto
  const handleEdit = async (e: any) => {
    e.preventDefault()
    setLoadingUpdateProduct(true)
    setEdit(true)
    const target = e.target
    const data = {
      id: target.id.value,
      name: target.name.value,
      value: Number(target.value.value),
      active: target.active.value === "on" ? true : false
    }
    updateProduct({
      variables: {
        active: data.active,
        id: data.id,
        name: data.name,
        value: data.value
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      setLoadingUpdateProduct(false)
      refetch()
      setEdit(false)
    })
    console.log(data)
  }

  return (
    <form onSubmit={handleEdit} className="flex flex-col border w-fit p-2 rounded relative">
      <input type="hidden" name='id' defaultValue={item.id.toString()} />
      <div className='boxInputUpdate'>
        <label htmlFor="name">Nome</label>
        <input type="text" name='name' id='name' className='border' defaultValue={item.name?.toString()} />
      </div>
      <div className='boxInputUpdate'>
        <label htmlFor="value">Valor</label>
        <input type="text" name='value' id='value' className='border' defaultValue={item.value?.toString()} />
      </div>
      <div className='boxInputUpdate' >
        <label htmlFor='active'>Status</label>
        <div className='flex gap-4'>
          {item.active ? (
            <>
              <div className='gap-2 flex'>
                <input defaultChecked type="radio" name='active' id='publicity' value="on" className='border' />
                <label htmlFor="publicity">Ativado</label></div>
              <div className='gap-2 flex'>
                <input type="radio" name='active' id='draft' value="off" className='border' />
                <label htmlFor="draft">Desativado</label>
              </div>
            </>
          ) : (
            <>
              <div className='gap-2 flex'>
                <input type="radio" name='active' id='publicity' value="on" className='border' />
                <label htmlFor="publicity">Ativado</label>
              </div>
              <div className='gap-2 flex'>
                <input defaultChecked type="radio" name='active' id='draft' value="off" className='border' />
                <label htmlFor="draft">Desativado</label>
              </div>
            </>
          )}

        </div>
      </div>
      <div>
        <button className='py-1 px-12 rounded border w-fit'>{loadingUpdateProduct ? "Enviando" : "Enviar"}</button>
        <button type='button' onClick={() => { setEdit(false) }} className='py-1 px-12 rounded border w-fit'>Cancelar</button>
      </div>
    </form>
  )
}