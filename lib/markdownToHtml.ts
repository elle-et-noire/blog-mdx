import { remark } from 'remark'
import html from 'remark-html'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

export default async function markdownToHtml(markdown: string): Promise<MDXRemoteSerializeResult> {
  const mdxSource = await serialize(markdown)
  return mdxSource
}
