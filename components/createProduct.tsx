import { useState } from "react"
import { useCreateProductMutation, useGetAllProductsQuery } from "../graphql/generated"

export const FormCreateProduct = () => {
  // Chama a Função Para Criar Produto no GraphCMS
  const [createProduct] = useCreateProductMutation()
  // Estado para Armezana o Tempo de Carregamento da Requisição para O GraphCMS
  const [loadingCreateProduct, setLoadingCreateProduct] = useState(false)
  // Função que Atualizar a Lista de Produtos
  const { refetch } = useGetAllProductsQuery()

  // Função Que Recebe da Dados do Formulario
  const handleCreate = async (e: any) => {
    e.preventDefault()
    setLoadingCreateProduct(true)
    const target = e.target

    const fileInput = e.target.elements.file;
    const file = fileInput.files[0];
    console.log(file)



    const data = {
      name: target.name.value,
      value: Number(target.value.value),
      active: target.active.value === "on" ? true : false
    }

    createProduct({
      variables: {
        name: data.name,
        value: Number(data.value),
        active: data.active
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    }).finally(() => {
      setLoadingCreateProduct(false)
      target.reset()
      refetch()
    })

  }

  return (
    <form onSubmit={handleCreate} className='flex gap-2 flex-col border p-10 w-1/2 rounded m-auto'>
      <div className="flex ">
        <div className="w-1/2">
        <div className='flex flex-col'>
            <label htmlFor="file">Nome do Produto</label>
            <input type="file" name='file' id='file' className='border' />
          </div>
        </div>
        <div className="w-1/2">
          <div className='flex flex-col'>
            <label htmlFor="name">Nome do Produto</label>
            <input type="text" name='name' id='name' className='border' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="value">Valor</label>
            <input type="text" name='value' id='value' className='border' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='active'>Status</label>
            <div className='w-fit flex gap-1'>
              <input defaultChecked type="radio" name='active' id='publicity' value="on" className='border' /> <label htmlFor="publicity">Ativado</label>
              <input type="radio" name='active' id='draft' value="off" className='border' /> <label htmlFor="draft">Desativado</label>
            </div>
          </div>
        </div>
      </div>
      <button className='py-1 px-12 rounded border w-fit'>{loadingCreateProduct ? "Enviando" : "Enviar"}</button>
    </form>
  )
}