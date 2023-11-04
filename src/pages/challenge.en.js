import React from 'react';

import ChallengePage from '../components/ChallengePage';

const Challenge = () => {
  return (
    <ChallengePage
      lang="en"
      title="Full stack -challenge | Full stack open 2020"
      seoDescription="The University of Helsinki and Houston Inc. have partnered up to challenge both individual developers and companies alike to learn and build upon their expertise in true Full Stack development. The course is built by coders for coders, and offers something for both newcomers and seasoned industry veterans alike. "
      aboutContent={[
       "Use a combination of traditional tools and modern-word-driven modern tools to make great art. In this section we provide you with a curated list of Modern AI tools which will help you explore the space of all images with words as latent brush strokes",
      ]}
      joinContent={[
        'Hand Drawn',
        'Paint',
        'Canva',
        'https://affinelayer.com/pixsrv/',
        'http://adityaramesh.com/posts/dalle2/dalle2.html',
        'https://yining1023.github.io/fast_style_transfer_in_ML5/',
        'Canva AI',
        'Image2Image',
        'InPainting',
        'https://www.bing.com/create',
      ]}
    />
  );
};

export default Challenge;
