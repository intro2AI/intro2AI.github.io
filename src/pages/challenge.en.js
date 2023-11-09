import React from 'react';

import ChallengePage from '../components/ChallengePage';

const Challenge = () => {
  return (
    <ChallengePage
      lang="en"
      title="Full stack -challenge | Full stack open 2020"
      seoDescription="The University of Helsinki and Houston Inc. have partnered up to challenge both individual developers and companies alike to learn and build upon their expertise in true Full Stack development. The course is built by coders for coders, and offers something for both newcomers and seasoned industry veterans alike. "
      aboutContent={[
       "In this section we provide you with a curated list of Modern AI tools which will help you explore the space of all images with words as knobs",
      ]}
      joinContent={[
        '<a href="">Hand Draws</a>',
        '<a href="">Painting</a>',
        '<a href="">Canva</a>',
        '<a href="https://www.photopea.com/">Photopea</a>',
        '<a href="https://affinelayer.com/pixsrv/">Sketch2Img</a>',
        '<a href="http://adityaramesh.com/posts/dalle2/dalle2.html">How Dall-E works</a>',
        '<a href="https://yining1023.github.io/fast_style_transfer_in_ML5/">Style Transfer</a>',
        'Canva AI',
        'Image2Image',
        'InPainting',
        '<a href="https://www.bing.com/create">Bing Image Creator</a>',
      ]}
    />
  );
};

export default Challenge;
