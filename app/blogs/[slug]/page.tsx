import Image from 'next/image';

import { formatDate } from '@/lib/utils';
import MDXContent from '@/components/next-mdx/mdx-content';
import { getPosts, getPostBySlug } from '@/lib/posts';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { notFound } from 'next/navigation';
import { TransitionLink } from '@/components/custom-wrapper/TransitionLink';
import Header from '@/components/header/Header';

export async function generateStaticParams() {
  const posts = await getPosts();
  const slugs = posts.map((post) => ({ slug: post.slug }));
  return slugs;
}

type Params = Promise<{ slug: string }>;

export default async function Post({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const { title, image, author, publishedAt } = metadata;

  return (
    <section className="bg-zinc-950 max-w-4xl mx-auto p-4 md:p-6 lg:p-4 xl:p-0">
      <div className="w-full">
        <div className="p-4 md:p-6 lg:p-10">
          <Header />
        </div>

        <div className="pt-[2rem] lg:pt-[0.5rem] flex flex-row justify-between">
          <TransitionLink href="/blogs">
            <div className="shadow-[inset_0_0_0_2px_#616467] px-4 py-2.5 rounded-full mb-8 inline-flex items-center gap-2 font-normal text-muted-foreground transition-colors hover:text-yellow-50">
              <ArrowLeftIcon className="h-5 w-5 md:h-7 md:w-7" />
              <span className="inline-flex items-center text-sm md:text-xl font-medium">
                Back to blogs
              </span>
            </div>
          </TransitionLink>

          <div>
            <h1 className="text-yellow-50 text-lg md:text-xl text-right">
              {author}
            </h1>
            <p className="text-muted-foreground text-sm md:text-lg text-right">
              {formatDate(publishedAt ?? '')}
            </p>
          </div>
        </div>

        {image && (
          <div className="relative mb-6 overflow-hidden rounded-xl">
            <Image
              src={image}
              alt={title || ''}
              className="object-cover"
              priority
              width={1200}
              height={400}
              quality={100}
            />
          </div>
        )}

        <main className="prose prose-invert mx-auto max-w-4xl break-words pb-8">
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  );
}
