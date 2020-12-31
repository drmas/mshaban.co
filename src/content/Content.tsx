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

        .content :global(h2) {
          @apply font-semibold text-gray-300 my-4;
        }

        .content :global(h1) {
          @apply font-semibold text-gray-300;
        }

        .content :global(h3) {
          @apply font-semibold text-gray-300 my-4;
        }

        .content :global(pre) {
          @apply my-10;
        }
      `}
    </style>
  </div>
);

export { Content };
