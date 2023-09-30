import { AppProps } from 'next/app'
import '../styles/index.css'
import MathJaxEnv from '../components/mathjax-env'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MathJaxEnv>
      <Component {...pageProps} />
    </MathJaxEnv>
  )
}
