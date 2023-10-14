import { MDXRemoteSerializeResult } from 'next-mdx-remote'

type PostType = {
  slug: string
  title: string
  date: string
  content: MDXRemoteSerializeResult
}

export default PostType
