import Image from 'next/image'

import { formatDate } from '@/lib/utils'
import MDXContent from '@/components/next-mdx/mdx-content'
import { getPosts, getPostBySlug } from '@/lib/posts'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { notFound } from 'next/navigation'
import { TransitionLink } from '@/components/custom-wrapper/TransitionLink'
import Header from '@/components/header/Header'
// import NewsletterForm from '@/components/newsletter-form'

export async function generateStaticParams() {
  const posts = await getPosts()
  const slugs = posts.map(post => ({ slug: post.slug }))

  return slugs
}
type Params = Promise<{ slug: string }>
export default async function Post({ params }: { params: Params }) {
  const { slug } = await params

  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, image, author, publishedAt } = metadata

  return (
    <section className='pb-24 max-w-6xl mx-auto p-4 md:p-6 lg:p-4 xl:p-0'>
      <div className='w-full'>
          <div className='p-4 md:p-6 lg:p-10'>
            <Header />
          </div>
        <div className='pt-[2rem] flex flex-row justify-between'>
          <TransitionLink
            href='/blogs'
          >
            <div className='shadow-[inset_0_0_0_2px_#616467] px-4 py-2.5 rounded-full mb-8 inline-flex items-center gap-2 font-normal text-muted-foreground transition-colors hover:text-foreground'>
              <ArrowLeftIcon className='h-5 w-5 md:h-7 md:w-7' />
              <span className='inline-flex items-center text-sm md:text-xl font-medium'>Back to blogs</span>
            </div>
          </TransitionLink>

          <div>
            <h1 className='text-lg md:text-xl'>{author}</h1>
            <p className='text-muted-foreground mt-2 text-sm md:text-md text-right'>{formatDate(publishedAt ?? '')}</p>
          </div>
        </div>

        {image && (
          <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
            <Image
              src={image}
              alt={title || ''}
              className='object-cover'
              fill
            />
          </div>
        )}

        <main className='prose mt-16 dark:prose-invert mx-auto max-w-6xl break-words'>
          <MDXContent source={content} />
        </main>

        {/* <footer className='mt-16'>
          <NewsletterForm />
        </footer> */}
      </div>
    </section>
  )
}
