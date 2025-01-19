'use client'

import { useState } from 'react'
import { PostMetadata } from '@/lib/posts'
import Posts from './Blogs'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Cross2Icon } from '@radix-ui/react-icons'

export default function BlogsWithSearch({ posts }: { posts: PostMetadata[] }) {
  const [query, setQuery] = useState('')
  const filtered = posts.filter(post =>
    post.title?.toLowerCase().includes(query.toLowerCase())
  )

  const isFiltered = query.length > 0
  function resetFilter() {
    setQuery('')
  }

  return (
    <div className='mt-4'>
        <div className='flex items-center justify-between border-b border-neutral-700 pb-6'>
          <h2 className='title text-2xl md:text-5xl font-semibold text-yellow-50'>Blogs.</h2>

          <div className='flex items-center gap-3'>
            <Input
              type='text'
              placeholder='Search posts...'
              className='w-[140px] md:w-[300px] border border-neutral-700 text-xs md:text-xl mt-2 h-8 md:h-10'
              value={query}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            />
            {isFiltered && (
              <Button
                size='sm'
                variant='secondary'
                onClick={resetFilter}
                className='h-8 px-2 lg:px-3'
              >
                Reset
                <Cross2Icon className='ml-2 h-4 w-4' />
              </Button>
            )}
          </div>
        </div>

      <Posts posts={filtered} />
    </div>
  )
}