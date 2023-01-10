import { gql } from "@apollo/client"
import Link from "next/link"
import { useRouter } from "next/router"
import { CardProduct } from "../../components/cardProduct"
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
    const { pathname, back } = useRouter()

    return (
        <div className="flex flex-col">
            <div className={`h-80 w-full flex-col text-white flex text-4xl font-bold p-2 bg-gray-900`}>
                <div className="h-fit text-sm w-fit">
                    <button onClick={back} className="hover:underline">Voltar</button>
                </div>
                <div className="flex items-center justify-center h-full">
                    {pathname.replace(/\/(\w)/, (match, p1) => p1.toUpperCase())}
                </div>
            </div>


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
    )
}

export default Index
