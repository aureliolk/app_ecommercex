import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client"
import { client } from '../lib/apollo'
import { ContextProvider } from '../contexts/useContext'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </ApolloProvider>
    </SessionProvider>
  )
}
