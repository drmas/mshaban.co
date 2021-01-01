import React from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

import { Content } from '../content/Content';
import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <ul>
      {props.posts.map((elt) => (
        <li key={elt.slug} className="mb-10">
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <a className="hover:no-underline">
              <h2 className="text-5xl text-gray-400 font-bold">{elt.title}</h2>
            </a>
          </Link>
          <p className="text-gray-600 text-xl">{format(new Date(elt.date), 'LLL d, yyyy')}</p>
          <img src={elt.image} className="w-full my-6" alt="hero" />
          <Content>
            <p
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: elt.description }}
            />
            <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
              <a className="text-gray-400 text-xl">Read more</a>
            </Link>
          </Content>
        </li>
      ))}
    </ul>

    <Pagination previous={props.pagination.previous} next={props.pagination.next} />
  </>
);

export { BlogGallery };
