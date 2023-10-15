import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../interfaces/post'
import Link from 'next/link'
import DateFormatter from '../components/date-formatter'

type Props = {
  posts: Post[]
}

export default function Index({ posts }: Props) {
  return (
    <>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <section>
        <div className="grid grid-cols-1 gap-y-5">
          {posts.length > 0 && posts.map((post) => (
            <div>
              <h3 className="text-3xl mb-3 leading-snug">
                <Link
                  as={`/posts/${post.slug}`}
                  href="/posts/[slug]"
                  className="hover:underline"
                >
                  {post.title}
                </Link>
              </h3>
              <div className="text-lg mb-4">
                <DateFormatter dateString={post.date} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export const getStaticProps = async () => {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
  ])

  return {
    props: { posts },
  }
}
