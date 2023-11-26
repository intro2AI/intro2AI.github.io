import React from 'react';

import ChallengePage from '../components/ChallengePage';

const Challenge = () => {
  return (
    <ChallengePage
      lang="en"
      title="intro2AI | Art Challenge"
      seoDescription="The University of Helsinki and Houston Inc. have partnered up to challenge both individual developers and companies alike to learn and build upon their expertise in true Full Stack development. The course is built by coders for coders, and offers something for both newcomers and seasoned industry veterans alike. "
      aboutContent={[
       'In this section we provide you with a curated list of Modern AI tools which will help you explore the space of all images with words as knobs.<br> Think this: How many <a href="https://www.reddit.com/r/BrandNewSentence/" style="text-decoration: underline;">brand new sentences</a> can our imagination stitch together? Can you generate a portrait of your great grandma just using an engineered prompt?',
      ]}
      joinContent={[
        '<a href="">Hand Drawing</a><br><a href="">Hand Painting</a><br><a href="https://www.canva.com/" style="text-decoration: underline;">Canva</a><br><a href="https://www.photopea.com/">Photopea</a><br><a href="https://affinelayer.com/pixsrv/">Sketch2Img</a><br><a href="http://adityaramesh.com/posts/dalle2/dalle2.html" style="text-decoration: underline;">How Dall-E works</a><br><a href="https://yining1023.github.io/fast_style_transfer_in_ML5/">Style Transfer</a><br>Image2Image<br>InPainting<br><a href="https://www.bing.com/create">Bing Image Creator</a>',
      ]}
    />
  );
};

export default Challenge;
