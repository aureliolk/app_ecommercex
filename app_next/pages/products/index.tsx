import Link from "next/link"
import { useRouter } from "next/router"
import { CardProduct } from "../../components/cardProduct"
import { useGetAllProductsQuery } from "../../graphql/generated"


const Index = () => {
    const { data } = useGetAllProductsQuery()
    const { pathname } = useRouter()
    const { back } = useRouter()

    if (!data) {
        return <div>Carregando</div>
    }

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


            <div className="flex p-4 gap-3">
                {data.products.map(item => {
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
