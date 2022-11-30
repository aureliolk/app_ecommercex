import { FormEvent, useState } from 'react'
import { useCreateProductMutation, useDeleteProductMutation, useGetProductsLazyQuery, useGetProductsQuery } from './graphql/generated'
import {Trash, Spinner} from "phosphor-react"


function App() {
  const [loadingCreateProduct, setLoadingCreateProduct] = useState(false)
  const [loadingDeleteProduct, setLoadingDeleteProduct] = useState(false)
  const [loadingUpdateProduct, setLoadingUpdateProduct] = useState(false)

  const { data,refetch } = useGetProductsQuery()
  const [createProduct] = useCreateProductMutation()
  const [deleteProduct] = useDeleteProductMutation()

  const handleSubmit = async (e:any)=>{
    e.preventDefault()
    setLoadingCreateProduct(true)
    const target = e.target
    const data = {
      name: target.name.value,
      value: Number(target.value.value),
      active: target.active.value === "on" ? true : false
    }

    createProduct({
      variables:{
        name: data.name,
        value: Number(data.value),
        active: data.active
      }
    }).then(res =>{
      console.log(res)
    }).catch(err =>{
      console.log(err)
    }).finally(()=>{
      setLoadingCreateProduct(false)
      target.reset()
      refetch()
    })
    
  }

  const delProduct = async (id:string) => {
    setLoadingDeleteProduct(true)
    deleteProduct({
      variables:{
        id
      }
    }).then(res =>{
      console.log(res)
    }).catch(err =>{
      console.log(err)
    }).finally(()=>{
      setLoadingDeleteProduct(false)
      refetch()
    })
  }

  if (!data) {
    return <div>Carregando</div>
  }

  console.log(data)

  return (
    <div className='flex flex-col gap-3 p-2'>
      <h1 className='text-lg'> CRUD Exemple Product</h1>
      <div className='flex gap-3 my-2'>
        {data.products.map(item => {
          return (
            <div key={item.id} className="flex flex-col border w-fit p-2 rounded relative">
              <div>Nome: {item.name}</div>
              <div>Valor: {item.value}</div>
              <div>Status: {item.active === true ? "Ativo" : "Desativado"}</div>
              <button onClick={()=>{delProduct(item.id)}} className="mt-2">{loadingDeleteProduct ? <Spinner size={20} className="animate-spin"/> : <Trash size={20}/>}</button>
            </div>
          )
        })}
      </div>
      <form onSubmit={handleSubmit} className='flex gap-2 flex-col border p-4 w-fit rounded'>
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
            <input defaultChecked type="radio" name='active' id='publicity' value="on" className='border' /> <label htmlFor="publicity">Publicado</label>
            <input type="radio" name='active' id='draft' value="off" className='border' /> <label htmlFor="publicity">Rascunho</label>
            </div>
          </div>
          <button className='py-1 px-12 rounded border w-fit'>{loadingCreateProduct ? "Enviando" : "Enviar"}</button>
        </form>
    </div>
  )
}

export default App
