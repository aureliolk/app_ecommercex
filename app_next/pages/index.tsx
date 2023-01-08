import Head from 'next/head'
import { useContext } from 'react'
import { FormEditProduct } from '../components/editProduct'
import { FormCreateProduct } from '../components/createProduct'
import { CardProduct } from '../components/cardProduct'
import { DeleteProduct } from '../components/deleteProduct'
import { Context } from '../contexts/useContext'
import { DeleteMultipleProduct } from '../components/deleteMultipleProduct'
import Link from 'next/link'
import { useGetAllProductsQuery } from '../graphql/generated'



export default function Home() {
  // Estado Global das Variaveis
  const { id, edit, deleteMutipleProduct, listItem } = useContext(Context)
  // Função que Atualizar a Lista de Produtos
  const { data } = useGetAllProductsQuery()

  if (!data) {
    return <div>Carregando</div>
  }

  console.log(edit)
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
          <div className='flex gap-3'>
            {data.products.map(item => {
              return (
                <div key={item.id}>
                  {edit && item.id === id ? (
                    <FormEditProduct item={item} />
                  ) : (
                    <div>
                      <CardProduct item={item} />
                      <DeleteProduct item={item} />
                    </div>
                  )}
                  {deleteMutipleProduct && <input type="checkbox" id='checkbox' onClick={() => { listItem.push(item.id) }} />}
                </div>
              )
            })}
          </div>
          <div className='text-sm font-bold hover:underline'>
              <Link href={"product"}>Ver Todos</Link>
            </div>

          {data.products.length > 1 &&
            <DeleteMultipleProduct />
          }
          <FormCreateProduct />
        </div>
      </main>
    </>
  )
}
