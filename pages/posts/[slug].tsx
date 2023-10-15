import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToMdxSource from '../../lib/markdownToMdxSource'
import type PostType from '../../interfaces/post'
import DateFormatter from '../../components/date-formatter'
import { MathJax } from 'better-react-mathjax'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote'

type Props = {
  post: PostType
}

export default function Post({ post }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const MDXComponents: any = {
    MathJax: MathJax,
    a: Link
  };

  return (
    <>
      <Head>
        <title>{`${post.title} | ${CMS_NAME}`}</title>
      </Head>
      <article>
        <h1 className="text-5xl font-bold tracking-tighter leading-tight mb-12 text-center">
          {post.title}
        </h1>
        <div className="text-sm text-right italic text-slate-500">
          <DateFormatter dateString={post.date} />
        </div>
        <MDXRemote {...post.content} components={MDXComponents} />
      </article>
    </>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
  ])
  const content = await markdownToMdxSource(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
