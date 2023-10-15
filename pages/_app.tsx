import { AppProps } from 'next/app'
import '../styles/index.css'
import MathJaxEnv from '../components/mathjax-env'
import localFont from 'next/font/local'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

const applimincho = localFont({
  src: './AppliMincho.otf',
  display: 'swap'
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <MathJaxEnv>
        <Header />
        <div className={`container mx-auto pt-28 pb-10 max-w-2xl min-h-screen ${applimincho.className}`}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </MathJaxEnv>
    </div>
  )
}
