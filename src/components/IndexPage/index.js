import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';

import { BodyText } from '../BodyText/BodyText';
import { CompaniesBanner } from '../CompaniesBanner/CompaniesBanner';
import Element from '../Element/Element';
import { Image } from './../Image/Image';
import Layout from '../layout';
import { PartBanner } from '../PartBanner/PartBanner';
import SEO from '../seo';
import { Some } from '../Some/Some';
import { SubHeader } from '../SubHeader/SubHeader';
import { TripleBorder } from '../TripleBorder/TripleBorder';
import cc from '../../images/cc.svg';
import colors from '../../colors';
import content from '../../content/pages/main.json';
import houstonLogo from '../../images/theclock_white.webp';
import landingImage from '../../images/landing.webp';
import studentReviews from '../../images/student_reviews.webm';
import licenceIcon from '../../images/cc-logo.svg';
import mainSEOdescription from '../../content/seo/mainSEOdescription';
import mainSEOtags from '../../content/seo/mainSEOtags';
import news from '../../images/noun_news_1248039.svg';
import getTranslationPath from '../../utils/getTranslationPath';

import PaymentButton from './PaymentButton';






const IndexPage = ({ lang, title = 'Introduction to Modern AI' }) => {
  const { t } = useTranslation();

  const {
    mainTitle,
    intro,
    current,
    licence,
    university,
    houston,
    contacts,
    licenced,
  } = content[lang];

  const seoDescription = mainSEOdescription[lang];


  return (
    <Layout>
      <SEO
        lang={lang}
        title={title}
        description={seoDescription}
        keywords={[...mainSEOtags]}
      />
      <div className="frontpage-hero container spacing--after spacing--mobile">
        <Element
          flex
          spaceBetween
          className="spacing--small spacing--mobile"
          relative
        >
          <Element dirColumn className="frontpage-hero__content col-6">
            <SubHeader
              className="frontpage-hero__heading"
              text={mainTitle}
              headingLevel="h1"
            />

            <SubHeader text={t('homePage:courseNameTitle')} headingLevel="h2" />

            {/* <Link
              className="frontpage-hero__cta centered about__challenge-button"
              to={getTranslationPath(lang, '/#course-contents')}
              style={{ marginBottom: '0.5rem' }} // Reduced bottom margin
            >
              {t('homePage:startCourseButton')}
            </Link> */}

            {/* <Element 
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
            </Element> */}
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
      <PartBanner lang={lang} />
      {/* Full-width container for the video */}
      <div style={{ 
        width: '100vw', 
        position: 'relative', 
        left: '50%', 
        right: '50%', 
        marginLeft: '-50vw', 
        marginRight: '-50vw',
        overflow: 'hidden'
      }}>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          style={{
            width: '100%',
            height: 'auto',
            display: 'block'
          }}
        >
          <source src={studentReviews} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Layout>
  );
};

export default IndexPage;
