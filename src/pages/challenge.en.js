import React from 'react';

import ChallengePage from '../components/ChallengePage';

const Challenge = () => {
  return (
    <ChallengePage
      lang="en"
      title="intro2AI | Art Challenge"
      seoDescription="Kartik Chincholikar has prepared this course to challenge Domain Experts, Scientists and and Companies alike to learn and build upon their expertise in modern Artificial Intelligence, Machine Learning technologies. The course is built by AI Experts for Domain Experts, and offers something for both newcomers and seasoned industry veterans alike. "
      aboutContent={[
       'In this section we will curate a list of Modern AI tools which will help you explore the space of all images with words as knobs.<br> Think this: <br>How many <a href="https://www.reddit.com/r/BrandNewSentence/" style="text-decoration: underline;">brand new sentences</a> can our imagination stitch together?<br> Can you generate a portrait of your great great grandma by just using an engineered prompt?',
      ]}
      joinContent={[
      ]}
    />
  );
};

export default Challenge;
