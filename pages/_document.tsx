import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='text-normaltxt bg-[radial-gradient(ellipse_at_40px_40px,rgba(28,28,30,1)_30%,rgba(34,36,48,1)_50%,rgba(47,45,86,1)_70%,rgba(64,58,92,1)_80%,rgba(120,100,96,1)_100%)] bg-fixed'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
