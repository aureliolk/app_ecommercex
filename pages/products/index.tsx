import { gql } from "@apollo/client"
import Link from "next/link"
import { useRouter } from "next/router"
import { CardProduct } from "../../components/cardProduct"
import Layout from "../../components/layout/layout"
import { Banner } from "../../components/sections/banner"
import { client } from "../../lib/apollo"



export async function getServerSideProps() {

    const { data } = await client.query({
        query: gql`
         query Products {
            products {
                id
                name
                active
                value
            }
    }
        `
    })

    return {
        props: {
            data
        }
    }
}

interface PropsProductQuery {
    data: {
        products: [
            {
                active: boolean
                name: string
                value: number
                id:string
            }
        ]
    }
}



const Index = ({ data }: PropsProductQuery) => {
    const { pathname } = useRouter()

    return (
        <Layout>
            <div className="flex flex-col">
            <Banner bg="bg-gray-900" title={pathname.replace(/\/(\w)/, (match, p1) => p1.toUpperCase())} backState={true} />

            <div className=" gap-3 p-4 grid grid-cols-5 w-11/12 m-auto ">
                {data.products.map( item => {
                    return (
                        <Link href={`/products/${item.id}`} key={item.id} className="cursor-pointer hover:border" >
                            <CardProduct item={item} />
                        </Link>
                    )
                })}
            </div>
        </div>
        </Layout>
    )
}

export default Index
