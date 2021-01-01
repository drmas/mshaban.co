import React, { ReactNode } from 'react';

type IContentProps = {
  children: ReactNode;
};

const Content = (props: IContentProps) => (
  <div className="content prose prose-2xl">
    {props.children}

    <style jsx>
      {`
        .content :global(p) {
          @apply my-6 text-gray-400 text-2xl;
        }

        .content :global(ul) {
          @apply my-6;
        }

        .content :global(h1),
        .content :global(h2),
        .content :global(h3),
        .content :global(h4),
        .content :global(h5),
        .content :global(h6),
        .content :global(a) {
          @apply font-semibold text-gray-300 my-4;
        }

        .content :global(pre) {
          @apply my-10;
        }

        .content :global(h1) {
          @apply font-semibold text-gray-300;
        }
      `}
    </style>
  </div>
);

export { Content };
