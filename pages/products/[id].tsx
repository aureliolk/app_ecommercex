import { gql } from "@apollo/client"
import { NextPageContext } from "next"
import { useRouter } from "next/router"
import Layout from "../../components/layout/layout"
import { Banner } from "../../components/sections/banner"
import { client } from "../../lib/apollo"

export async function getServerSideProps(ctx: NextPageContext) {
  const { data } = await client.query({
    query: gql`
      query getProduct($id: ID) {
      product(where: {id: $id}) {
      name
      value
      active
   }
}
`,
    variables: { id: ctx.query.id }
  })
  return {
    props: {
      data
    }
  }
}

interface PropsProductQuery {
  data: {
    product: {
      active: boolean
      name: string
      value: number
    }
  }
}

export default function Products({ data }: PropsProductQuery) {

  return (
    <Layout>
      <div>
        <Banner bg={data.product?.active ? "bg-green-600" : "bg-red-600"} title={data?.product?.name} backState={true} />
        <div className="flex p-8">
          <div className="w-1/2">
            Imagen
          </div>
          <div className="w-1/2 flex flex-col">
            <div className="flex flex-col">
              <span className="text-sm font-light">Titulo do Produto</span>
              <span className="text-xl font-bold">{data.product?.name}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-light">Valor do Produto</span>
              <span className="text-xl font-bold">{data.product?.value}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-light">Status</span>
              <span className="text-xl font-bold">{data.product?.active ? "Ativo" : "Desativado"}</span>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  )
}
