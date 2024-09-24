import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'gatsby';
import { Banner } from '../Banner/Banner';
import { BodyText } from '../BodyText/BodyText';
import Element from '../Element/Element';
import Footer from '../Footer/Footer';
import { Image } from './../Image/Image';
import Layout from '../layout';
import { PartBanner } from '../PartBanner/PartBanner';
import SEO from '../seo';
// import content from '../../content/pages/about.json';
import landingImage from '../../images/landing.webp';
import mainSEOdescription from '../../content/seo/mainSEOdescription';
import mainSEOtags from '../../content/seo/mainSEOtags';
import { SubHeader } from '../SubHeader/SubHeader';

import PaymentButton from '../IndexPage/PaymentButton';
import content from '../../content/pages/main.json';
// modify the layout in such a way that the footer will not display on this page
const AboutPage = ({ title, lang }) => {
  const { t } = useTranslation();
  // const { intro } = content[lang] || content.en;
  const seoDescription = mainSEOdescription[lang] || mainSEOdescription.en;

  const {
    // mainTitle,
    // intro,
    current,
    // licence,
    // university,
    // houston,
    // contacts,
    // licenced,
  } = content[lang];

  return (
    <Layout hideFooter={true}>
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
      <div className="frontpage-hero container spacing--after spacing--mobile">
        <Element
          flex
          spaceBetween
          className="spacing--small spacing--mobile"
          relative
        >
          <Element dirColumn className="frontpage-hero__content col-6">
            <SubHeader text={t('homePage:buyPage')} headingLevel="h2" />
            <Element 
              flex 
              horizontalHalf 
              flexStart
              style={{ marginTop: '-0.5rem' }} // Negative top margin to pull it closer to the link
            >
              <BodyText
                className="spacing--small link"
                headingFont
                text={current}
              />
            </Element>
          </Element>

          <Image
            contain
            className="col-4 frontpage-hero__image"
            style={{ margin: 0 }}
            alt="Stacked cubes with React logo and JavaScript text"
            src={landingImage}
          />
        </Element>
      </div>
       
      <PaymentButton />
      {/* <Footer lang={lang} /> */}
      
    </Layout>
  );
};

export default AboutPage;
