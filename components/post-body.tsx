import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: MDXRemoteSerializeResult
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <MDXRemote {...content} />
    </div>
  )
}

export default PostBody
