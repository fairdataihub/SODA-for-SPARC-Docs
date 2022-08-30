import React from 'react';

// eslint-disable-next-line import/no-unresolved
import useFrontMatter from '@theme/useFrontMatter';

export default function SeoImage() {
  const { title, description } = useFrontMatter();

  const encodedUrl =
    'https://og.fairdataihub.org/api/ogimage?' +
    `app=soda-for-sparc` +
    `&title=${encodeURIComponent(title)}` +
    `&description=${description}`;

  console.log(encodedUrl);

  return (
    <head>
      <meta name="og:image" content={encodedUrl} />
    </head>
  );
}
