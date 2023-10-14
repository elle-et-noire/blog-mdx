import { AppProps } from 'next/app'
import '../styles/index.css'
import MathJaxEnv from '../components/mathjax-env'
import localFont from 'next/font/local'
import Head from 'next/head'

const applimincho = localFont({
  src: './AppliMincho.otf',
  display: 'swap'
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <MathJaxEnv>
        <div className={`text-normaltxt bg-[radial-gradient(ellipse_at_40px_40px,rgba(28,28,30,1)_30%,rgba(34,36,48,1)_50%,rgba(47,45,86,1)_70%,rgba(64,58,92,1)_80%,rgba(120,100,96,1)_100%)] bg-fixed ${applimincho.className}`}>
          <Component {...pageProps} />
        </div>
      </MathJaxEnv>
    </>
  )
}
