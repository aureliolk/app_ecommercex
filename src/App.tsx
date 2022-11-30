import { useState } from 'react'
import { useCreateProductMutation, useDeleteMultipleProductMutation, useDeleteProductMutation, useGetProductsQuery, useUpdateProductMutation } from './graphql/generated'
import { Trash, Spinner, Pencil } from "phosphor-react"


function App() {
  // Variaveis para armazena estado de carregamento da requisição
  const [loadingCreateProduct, setLoadingCreateProduct] = useState(false)
  const [loadingDeleteProduct, setLoadingDeleteProduct] = useState(false)
  const [loadingUpdateProduct, setLoadingUpdateProduct] = useState(false)
  const [loadingMutipleDeleteProduct, setLoadingMutipleDeleteProduct] = useState(false)


  // Variavel para armazena o ID unico do produto
  const [id, setId] = useState("")

  // Variavel para armazena o estado da Atulização
  const [edit, setEdit] = useState(false)

  // Variavel "Data" lista todo os item do Model Produto 
  // Variavel "Refetch" atualiza a lista do Model Produto
  const { data, refetch } = useGetProductsQuery()

  // Variavel createProduct Cria um Produto
  const [createProduct] = useCreateProductMutation()

  // Variavel deleteProduct Deleta um Produto
  const [deleteProduct] = useDeleteProductMutation()

  // Variavel updateProduct Atualizar um Produto
  const [updateProduct] = useUpdateProductMutation()

  // Funçao Para Cria Produto
  const handleCreate = async (e: any) => {
    e.preventDefault()
    setLoadingCreateProduct(true)
    const target = e.target
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

  // Funçao Para Deletar Unico Produto
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

  // Variavel para Armazena o Estado do CheckBox de Multiplos Itens
  const [deleteMutipleProduct, setDeleteMutipleProduct] = useState(false)

  var listItem = [] as any

  const [delMutiplesItem] = useDeleteMultipleProductMutation()

  // Função para Deletar Varios Produtos
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

  if (!data) {
    return <div>Carregando</div>
  }


  return (
    <div className='flex flex-col gap-3 p-2'>
      <h1 className='text-lg'> CRUD Exemple Product</h1>
      <div className='flex gap-3 my-2'>
        {data.products.map(item => {
          return (
            <div key={item.id}>
              {edit && item.id === id ? (
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
              ) : (
                <div key={item.id} className={item.active ? "flex flex-col border w-fit p-2 rounded relative bg-green-400 " : "flex flex-col border w-fit p-2 rounded relative bg-red-400"}>
                  <div>Nome: {item.name}</div>
                  <div>Valor: {item.value}</div>
                  <div>Status: {item.active === true ? "Ativo" : "Desativado"}</div>
                  <div className='flex justify-between'>
                    <button onClick={() => { setEdit(true), setId(item.id) }} className="mt-2"><Pencil size={20} /></button>
                    <button onClick={() => { delProduct(item.id) }} className="mt-2">{loadingDeleteProduct && item.id === id ? <Spinner size={20} className="animate-spin" /> : <Trash size={20} />}</button>
                  </div>
                  {deleteMutipleProduct && <input type="checkbox" onClick={() => { listItem.push(item.id) }} />}
                </div>
              )}
            </div>
          )
        })}
      </div>
      {data.products.length > 1 &&
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
      }
      <form onSubmit={handleCreate} className='flex gap-2 flex-col border p-4 w-fit rounded'>
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
            <input type="radio" name='active' id='draft' value="off" className='border' /> <label htmlFor="publicity">Desativado</label>
          </div>
        </div>
        <button className='py-1 px-12 rounded border w-fit'>{loadingCreateProduct ? "Enviando" : "Enviar"}</button>
      </form>
    </div>
  )
}

export default App
