import Head from 'next/head'
import { useContext } from 'react'
import { FormEditProduct } from '../components/editProduct'
import { FormCreateProduct } from '../components/createProduct'
import { CardProduct } from '../components/cardProduct'
import { Context } from '../contexts/useContext'
import { DeleteMultipleProduct } from '../components/deleteMultipleProduct'
import Link from 'next/link'
import { Pencil, Eye } from 'phosphor-react'
import { DeleteProduct } from '../components/deleteProduct'
import { useGetAllProductsQuery } from '../graphql/generated'


export default function Home() {
  // Estado Global das Variaveis
  const { id, edit, deleteMutipleProduct, listItem, setEdit, setId } = useContext(Context)

  const {data} = useGetAllProductsQuery()

  if(!data){
    return <div>Loading</div>
  }

  return (
    <>
      <Head>
        <title>List Products</title>
        <meta name="description" content="List of Products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div className='flex flex-col gap-3 p-2'>
          <h1 className='text-lg'> CRUD Exemple Product</h1>
          <FormCreateProduct />
          <div className='grid grid-cols-5 gap-3 w-11/12 m-auto '>
            {data.products.map((item : any) => {
              return (
                <div key={item.id}>
                  {edit && item.id === id ? (
                    <FormEditProduct item={item} />
                  ) : (
                    <div>
                      <CardProduct item={item} />
                      <div className='flex justify-between bg-gray-800 text-white items-center p-1 rounded border border-t-0 rounded-tr-none'>
                        <button onClick={() => { setEdit(true), setId(item.id) }} ><Pencil size={20} /></button>
                        <Link href={`/products/${item.id}`} ><Eye /></Link>
                        <DeleteProduct item={item} />
                      </div>
                    </div>
                  )}
                  {deleteMutipleProduct && <input type="checkbox" id='checkbox' onClick={() => { listItem.push(item.id) }} />}
                </div>
              )
            })}
          </div>
          <div className='text-sm font-bold hover:underline'>
            <Link href={"products"}>Ver Todos</Link>
          </div>

          {data.products.length > 1 &&
            <DeleteMultipleProduct />
          }
          
        </div>
      </main>
    </>
  )
}
