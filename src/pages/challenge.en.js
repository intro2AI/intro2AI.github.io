import React from 'react';

import ChallengePage from '../components/ChallengePage';

const Challenge = () => {
  return (
    <ChallengePage
      lang="en"
      title="Full stack -challenge | Full stack open 2020"
      seoDescription="The University of Helsinki and Houston Inc. have partnered up to challenge both individual developers and companies alike to learn and build upon their expertise in true Full Stack development. The course is built by coders for coders, and offers something for both newcomers and seasoned industry veterans alike. "
      aboutContent={[
        'We want to help domain experts think about the feasibility of AI solutions to domain specific workflows. The main goal is to demystify AI and teach the neccessary vocabulary required to get used to the AI way of thinking.',
        'We have designed this course help experts to learn and build upon their expertise in a true Learning by Playing spirit. Intuitions come first, formulaes and code comes later. We will first trigger your curiosity, and then guide you on your path to undertanding a concept. No complicated Math or Programming knowledge is required as a prerequisite.',
        'Course Fees :',
        '4000 Rs (India)',  
        '250 $ (International)',  
        '2000 Rs / 125 $ (Students)', 
        'The course material and resources are available free of charge and you can audit them from anywhere at anytime, at your leisure.',
      ]}
      joinContent={[
        'By accepting the challenge you are encouraging and empowering the members of your working community to acquire new skills. This course will make a great addition to your internal training and development programs and will serve well as self-study material amongst your other in-company training offerings.',
        'By partaking in the challenge, you will send a strong message to the outside world about your company’s technical expertise — this will help build your employer image and increase your visibility to software industry professionals.',
        'Joining the challenge is free of charge. Companies that heed the call and accept the challenge will have their logo proudly placed on the Full Stack course webpage.',
      ]}
    />
  );
};

export default Challenge;
