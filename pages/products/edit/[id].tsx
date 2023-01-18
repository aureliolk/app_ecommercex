import { useRouter } from "next/router"

import {  useState } from "react"
import Layout from "../../../components/layout/layout"
import { Banner } from "../../../components/sections/banner"
import { useGetProductQuery, useUpdateProductMutation } from "../../../graphql/generated"

const EditPtoduct = () => {
    const [loadingUpdateProduct, setLoadingUpdateProduct] = useState(false)
    const [updateProduct] = useUpdateProductMutation()

    const { query } = useRouter()
    const router = useRouter()
    const { data, refetch } = useGetProductQuery({
        variables: {
            id: query.id as string
        }
    })

    if (!data) {
        return "loading"
    }


    // Funçao Para Atualizar Produto
  const handleEdit = async (e: any) => {
    e.preventDefault()
    setLoadingUpdateProduct(true)
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
        refetch()
        setLoadingUpdateProduct(false)
        router.push("/admin")
    })
  }

    return (
        <Layout>
            <Banner bg={data.product?.active ? "bg-green-500" : "bg-red-500"} title={data.product?.name as string} backState={true} />
        <form className="flex flex-col gap-5 p-4 w-1/2" onSubmit={handleEdit}>
            <input type="hidden" name='id' defaultValue={query.id as string}/>
            <div className='boxInputUpdate'>
                <label htmlFor="name">Nome</label>
                <input type="text" name='name' id='name' className='border w-full ' defaultValue={data.product?.name as string} />
            </div>
            <div className='boxInputUpdate'>
                <label htmlFor="value">Valor</label>
                <input type="text" name='value' id='value' className='border w-full' defaultValue={data.product?.value as number} />
            </div>
            <div className='flex gap-4'>
                {data.product?.active ? (
                    <>
                        <div className='gap-2 flex'>
                            <input defaultChecked type="radio" name='active' id='publicity' value="on" className='border w-full' />
                            <label htmlFor="publicity">Ativado</label></div>
                        <div className='gap-2 flex'>
                            <input type="radio" name='active' id='draft' value="off" className='border w-full' />
                            <label htmlFor="draft">Desativado</label>
                        </div>
                    </>
                ) : (
                    <>
                        <div className='gap-2 flex'>
                            <input type="radio" name='active' id='publicity' value="on" className='border w-full' />
                            <label htmlFor="publicity">Ativado</label>
                        </div>
                        <div className='gap-2 flex'>
                            <input defaultChecked type="radio" name='active' id='draft' value="off" className='border w-full' />
                            <label htmlFor="draft">Desativado</label>
                        </div>
                    </>
                )}
            </div>
            <button className={data.product?.active ? "bg-green-500 text-white p-2" : "bg-red-500 text-white p-2"}>{loadingUpdateProduct ? "Atualizando" : "Atualizar"}</button>
        </form>
        </Layout>
        
    )
}

export default EditPtoduct


