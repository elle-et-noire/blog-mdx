import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import markdownStyles from './markdown-styles.module.css'
import { MathJax } from 'better-react-mathjax'

type Props = {
  content: MDXRemoteSerializeResult
}

const PostBody = ({ content }: Props) => {
  const MDXComponents = {
    MathJax: MathJax,
  }
  return (
    <div className="max-w-2xl mx-auto">
      <MDXRemote {...content} components={MDXComponents} />
    </div>
  )
}

export default PostBody
