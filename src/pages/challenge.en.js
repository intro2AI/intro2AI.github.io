import React from 'react';

import ChallengePage from '../components/ChallengePage';

const Challenge = () => {
  return (
    <ChallengePage
      lang="en"
      title="intro2AI | Art Challenge"
      seoDescription="The University of Helsinki and Houston Inc. have partnered up to challenge both individual developers and companies alike to learn and build upon their expertise in true Full Stack development. The course is built by coders for coders, and offers something for both newcomers and seasoned industry veterans alike. "
      aboutContent={[
       'In this section we provide you with a curated list of Modern AI tools which will help you explore the space of all images with words as knobs.<br> Think this: <br>How many <a href="https://www.reddit.com/r/BrandNewSentence/" style="text-decoration: underline;">brand new sentences</a> can our imagination stitch together?<br> Can you generate a portrait of your great great grandma by just using an engineered prompt?',
      ]}
      joinContent={[
      ]}
    />
  );
};

export default Challenge;
