import { globalStyles } from '@/src/commons/styles/styles'
import { Global } from '@emotion/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '@/src/components/commons/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Head>
        <script></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
