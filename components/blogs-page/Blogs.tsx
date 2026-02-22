import { PostMetadata } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import { TransitionLink } from '@/components/custom-wrapper/TransitionLink';
import { CardHeader } from '../ui/card';

export default function Blogs({
  posts,
}: {
  posts: PostMetadata[];
}) {
  return (
    <ul className="flex flex-col">
      {posts.map((post) => (
        <li key={post.slug}>
          <TransitionLink href={`/blogs/${post.slug}`}>
            <div className="block cursor-pointer">
              <div className="flex shadow-none py-4 md:py-8 border-b-2 border-neutral-700">
                {/* Content on the right */}
                <div className="flex-grow">
                  <CardHeader className="p-0">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-x-2 text-base">
                      {/* Title - Increased size to text-xl */}
                      <h3 className="text-yellow-50 inline-flex items-center text-lg md:text-3xl font-medium">
                        {post.title}
                      </h3>

                      {post.publishedAt && (
                        <div className="text-yellow-50 text-xs md:text-lg text-right">
                          {formatDate(post.publishedAt)}
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  {/* Description - Increased size to text-sm sm:text-base */}

                  <div className="text-yellow-50 mt-4 text-xs sm:text-base whitespace-pre-line">
                    {post.summary}
                  </div>
                </div>
              </div>
            </div>
          </TransitionLink>
        </li>
      ))}
    </ul>
  );
}

{
  /* <div className='flex flex-col justify-between gap-x-4 gap-y-1 sm:flex-row'>
<div className='max-w-lg'>
  <p className='inline-flex text-lg md:text-3xl font-medium'>{post.title}</p>
  <p className='mt-1 line-clamp-2 text-sm font-light text-muted-foreground'>
    {post.summary}
  </p>
</div>

{post.publishedAt && (
  <p className='mt-1 text-sm font-light'>
    {formatDate(post.publishedAt)}
  </p>
)}
</div> */
}
