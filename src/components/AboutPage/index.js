import React from 'react';
import { useTranslation } from 'react-i18next';

import { Banner } from '../Banner/Banner';
import { BodyText } from '../BodyText/BodyText';
import Element from '../Element/Element';
import Footer from '../Footer/Footer';
import { Image } from './../Image/Image';
import Layout from '../layout';
import { PartBanner } from '../PartBanner/PartBanner';
import SEO from '../seo';
import content from '../../content/pages/about.json';
import landingImage from '../../images/landing.webp';
import mainSEOdescription from '../../content/seo/mainSEOdescription';
import mainSEOtags from '../../content/seo/mainSEOtags';

const AboutPage = ({ title, lang }) => {
  const { t } = useTranslation();
  const { intro } = content[lang] || content.en;
  const seoDescription = mainSEOdescription[lang] || mainSEOdescription.en;

  return (
    <Layout>
      <SEO
        lang={lang}
        title={title}
        description={seoDescription}
        keywords={[
          ...mainSEOtags,
          'Avoin yliopisto',
          'Full stack harjoitustyö',
        ]}
      />

      <Element className="container spacing spacing--mobile--large">
        <Element className="col-8 push-right-1">
          <BodyText
            heading={{ level: 'h1', title: t('aboutPage:generalTitle') }}
            headingFontSize="2.3rem"
          />

          <Element flex spaceBetween>
            <div className="col-10 spacing--after">
              <BodyText text={intro} className="link" headingFont />
            </div>
          </Element>
        </Element>
      </Element>

      <PartBanner lang={lang} />
      <Footer lang={lang} />
    </Layout>
  );
};

export default AboutPage;
