import React from 'react';
import { useTranslation } from 'react-i18next';

import Layout from '../layout';
import { BodyText } from '../BodyText/BodyText';
import { DeveloperStory } from '../DeveloperStory/DeveloperStory';
import Element from '../Element/Element';
import Footer from '../Footer/Footer';
import SEO from '../seo';
import mainSEOtags from '../../content/seo/mainSEOtags';
import stories from '../../content/pages/stories.json';

const CompaniesPage = ({ lang, title, seoDescription }) => {
  const { t } = useTranslation();
  const langStories = stories[lang] || [];

  return (
    <Layout hideFooter={true}>
      <SEO
        lang={lang}
        title={title}
        description={seoDescription}
        keywords={[
          ...mainSEOtags,
          'AI',
          'Machine Learning',
          'Data Science',
          'Feasibility',
          'LLM',
          'Statistical Learning Theory',
          'Domain Knowledge',
          'Subject Matter Expert',
        ]}
      />

      <Element className="container">

        {langStories.map(story => (
          <DeveloperStory key={story.name} {...story} lang={lang} />
        ))}

        <Element className="spacing" />
      </Element>
      <Element className="spacing" />
      <Footer lang={lang} />
    </Layout>
  );
};

export default CompaniesPage;
