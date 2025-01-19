import { getPosts } from '@/lib/posts'
import Header from '@/components/header/Header';
import BlogsWithSearch from '@/components/blogs-page/BlogsWithSearch';
import Footer from '@/components/footer/Footer';


export default async function Page() {

  const posts = await getPosts()


  return (
    <div>
      <section className='min-h-screen mx-auto max-w-6xl p-4 md:p-6 lg:p-4 xl:p-0'>
          <div className="flex flex-col">
            <Header/>
            <div className='mt-20 md:mt-28'>
             <BlogsWithSearch posts={posts}/>
            </div>
          </div>
      </section>
      <Footer/>
    </div>
  )
}
