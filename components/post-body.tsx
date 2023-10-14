import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import markdownStyles from './markdown-styles.module.css'
import { MathJax } from 'better-react-mathjax'
import Link from 'next/link'

type Props = {
  content: MDXRemoteSerializeResult
}

const PostBody = ({ content }: Props) => {
  const MDXComponents: any = {
    MathJax: MathJax,
    a: Link
  }

  return (
    <div className={`max-w-2xl mx-auto ${markdownStyles['markdown']}`}>
      <MDXRemote {...content} components={MDXComponents} />
    </div>
  )
}

export default PostBody
