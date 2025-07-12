import { BLOG_POSTS } from '@/app/data'
import Link from 'next/link'

export default function BlogPage() {
  return (
    <div className="mx-auto mt-8 max-w-2xl px-2">
      <h1 className="mb-8 text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        Blog
      </h1>
      <div className="space-y-8">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.uid}
            className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
          >
            <Link
              href={post.link}
              className="text-2xl font-semibold text-zinc-900 hover:underline dark:text-zinc-100"
            >
              {post.title}
            </Link>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {post.description}
            </p>
            <Link
              href={post.link}
              className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
