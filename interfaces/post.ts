import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import type Author from './author'

type PostType = {
  slug: string
  title: string
  date: string
  coverImage: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: MDXRemoteSerializeResult
}

export default PostType
