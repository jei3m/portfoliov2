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

type CommonProps = React.HTMLAttributes<HTMLElement>;

const components = {
  code: Code,
  h1: (props: CommonProps) => <h1 {...props} className="text-yellow-50 text-4xl font-bold mb-4 mt-8 pb-2 border-b border-neutral-600" />,
  h2: (props: CommonProps) => <h2 {...props} className="text-yellow-50 text-3xl font-bold mb-6 pb-2 mt-10 lg:mt-20 border-b border-neutral-600" />,
  h3: (props: CommonProps) => <h3 {...props} className="text-yellow-50 text-2xl font-bold" />,
  p: (props: CommonProps) => <p {...props} className="text-yellow-50 leading-relaxed text-justify text-md sm:text-lg md:text-xl lg:text-xl" />,
  strong: (props: CommonProps) => <strong {...props} className="text-yellow-50 font-[700] text-justify text-md sm:text-lg md:text-xl lg:text-xl" />,
  ul: (props: CommonProps) => <ul {...props} className="text-yellow-50 list-disc pl-6 mb-4" />,
  ol: (props: CommonProps) => <ol {...props} className="text-yellow-50 list-decimal pl-6 mb-4" />,
  li: (props: CommonProps) => <li {...props} className="text-yellow-50 mb-2 text-justify text-md sm:text-lg md:text-xl lg:text-xl" />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} className="text-yellow-50 text-blue-400 hover:text-blue-300 underline text-md sm:text-lg md:text-xl lg:text-xl" />,
  blockquote: (props: CommonProps) => <blockquote {...props} className="text-yellow-50 border-l-4 border-gray-600 pl-4 italic my-4" />,
  hr: (props: CommonProps) => <hr {...props} className="border-neutral-600 my-4" />,
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