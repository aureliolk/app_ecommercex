import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Eye, Pencil } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CardProduct } from '../../components/cardProduct'
import { FormCreateProduct } from '../../components/createProduct'
import { DeleteMultipleProduct } from '../../components/deleteMultipleProduct'
import { DeleteProduct } from '../../components/deleteProduct'
import { FormEditProduct } from '../../components/editProduct'
import Layout from '../../components/layout/layout'
import { Context } from '../../contexts/useContext'
import { useGetAllProductsQuery } from '../../graphql/generated'

interface Props {
  loggedIn: boolean
}

const ProtectedPage = ({ loggedIn }: Props) => {
  const { id, edit, deleteMutipleProduct, listItem, setEdit, setId } = useContext(Context)
  const { data } = useGetAllProductsQuery()
  const router = useRouter()
  const [shouldRedirect, setShouldRedirect] = useState(false)

  useEffect(() => {
    if (!loggedIn) {
      setShouldRedirect(true)
    }
  }, [loggedIn])


  if(shouldRedirect){
    router.push('/')
    return <div>Redirecting...</div>
  }

  if (!data ) {
    return <div>Loading</div>
  }

  return (
    <Layout>
      <div className='flex flex-col gap-3 p-2'>
        <h1 className='text-lg'> CRUD Exemple Product</h1>
        <FormCreateProduct />
        <div className='grid grid-cols-5 gap-3 w-11/12 m-auto '>
          {data.products.map((item: any) => {
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
    </Layout>
  )
}

export const getServerSideProps = async ({ req }: { req: NextApiRequest }, res: NextApiResponse) => {

  try {
    const session = await getSession({ req })
    if (!session) {
      return { props: { loggedIn: false } }
    }
    return { props: { loggedIn: true } }
  } catch (error) {
    return { props: { loggedIn: false } }
  }
}

export default ProtectedPage
