import { useRouter } from "next/router"
import { useGetProductQuery } from "../../graphql/generated"


export default function Products(){
  const {query} = useRouter()
  const {data} = useGetProductQuery({
    variables:{
      id: query.id?.toString()
    }
  })  


  return(
    <div>
      <div className="h-80 w-full bg-slate-300 text-slate-900 items-center justify-center flex text-4xl font-bold">
                {data?.product?.name}
            </div>
    </div>
  )


}
