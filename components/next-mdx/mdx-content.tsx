import { JSX } from 'react';
import { highlight } from 'sugar-high';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children: string;
}

function Code({ children, ...props }: CodeProps) {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const components = {
  code: Code,
  h1: (props: any) => <h1 {...props} className="text-yellow-50 text-4xl font-bold mb-4 mt-8 pb-2 border-b border-neutral-600" />,
  h2: (props: any) => <h2 {...props} className="text-yellow-50 text-3xl font-bold mb-6 pb-2 mt-10 lg:mt-20 border-b border-neutral-600" />,
  h3: (props: any) => <h3 {...props} className="text-yellow-50 text-2xl font-bold" />,
  p: (props: any) => <p {...props} className="text-yellow-50 leading-relaxed text-justify text-md sm:text-lg md:text-xl lg:text-xl" />,
  strong: (props: any) => <strong {...props} className="text-yellow-50 font-[700] text-justify text-md sm:text-lg md:text-xl lg:text-xl" />,
  ul: (props: any) => <ul {...props} className="text-yellow-50 list-disc pl-6 mb-4" />,
  ol: (props: any) => <ol {...props} className="text-yellow-50 list-decimal pl-6 mb-4" />,
  li: (props: any) => <li {...props} className="text-yellow-50 mb-2 text-justify text-md sm:text-lg md:text-xl lg:text-xl" />,
  a: (props: any) => <a {...props} className="text-yellow-50 text-blue-400 hover:text-blue-300 underline text-md sm:text-lg md:text-xl lg:text-xl" />,
  blockquote: (props: any) => <blockquote {...props} className="text-yellow-50 border-l-4 border-gray-600 pl-4 italic my-4" />,
  hr : (props: any) => <hr {...props} className="border-neutral-600 my-4" />,
};

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}