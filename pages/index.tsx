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
import Layout from '../components/layout/layout'
import { Banner } from '../components/sections/banner'



export default function Home() {
  

  return (
    <>
      <Head>
        <title>List Products</title>
        <meta name="description" content="List of Products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
      <Layout >
        <Banner bg='bg-slate-400' title='Banner Home' backState={false} />
      
          
      </Layout>
      </main>


     
    </>
  )
}
