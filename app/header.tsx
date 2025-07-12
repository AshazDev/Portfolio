'use client'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Mohammed Ashaz Shams
        </Link>
      </div>
      <nav className="flex items-center gap-4">
        <Link
          href="/blog"
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Blog
        </Link>
      </nav>
    </header>
  )
}
