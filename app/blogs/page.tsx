import { getPosts } from '@/lib/posts'
import Header from '@/components/header/Header';
import BlogsWithSearch from '@/components/blogs-page/BlogsWithSearch';


export default async function Page() {

  const posts = await getPosts()


  return (
    <section className='mx-auto max-w-6xl mt-20 md:mt-28 p-4 md:p-6 lg:p-4 xl:p-0'>
        <div className="flex flex-col">
          <Header/>
          <BlogsWithSearch posts={posts}/>
        </div>
    </section>
  )
}
