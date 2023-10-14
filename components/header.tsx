import Link from 'next/link'
import { CMS_NAME } from '../lib/constants'

const Header = () => {
  return (
    <header className='mx-auto px-5 max-w-4xl'>
      <h2 className="text-2xl font-bold tracking-tight md:tracking-tighter leading-tight py-4 border-b border-transparent hover:border-amber-900 text-slate-300 transition ease-in-out delay-150 duration-300">
        <Link href="/">
          {CMS_NAME}
        </Link>
        .
        </h2>
    </header>
  )
}

export default Header
