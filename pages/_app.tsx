import { AppProps } from 'next/app'
import Head from 'next/head'
import 'sass/global.scss'

const title = 'archive_fashion'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
