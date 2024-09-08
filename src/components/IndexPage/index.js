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
      <Element className="container spacing spacing--after">
        <Element className="push-right-1 push-left-1" spaceBetween flex gap='1.111rem'>
          <Element className="container spacing spacing--after">
            <video
              src={studentReviews}
              alt="Student reviews video"
              style={{ maxWidth: '100%', height: 'auto' }}
              autoPlay
              loop
              muted
              playsInline
            />
          </Element>
        </Element>
        
        {/* <Element className="push-right-1 push-left-1" spaceBetween flex gap='1.111rem'>
          <Element flex horizontalHalf flexStart>
            <Element
              flex
              spaceBetween
              autoBottomMargin
              className="col-10"
            >
              <BodyText
                className="col-7 col-8--mobile link"
                style={{ marginRight: '2rem' }}
                heading={{
                  title: t('   PREREQUISITES'),
                  level: 'h3',
                }}
              />
            </Element>
            <BodyText
              className="spacing--small link"
              headingFont
              text={[
                "This course is designed for Subject Matter Experts and Students of all disciplines (aged 14+).",
                "You will need a computer with internet access, time, dedication, and the will to apply AI to the specific domain of your interest.",
                "No complicated Math or Programming knowledge is required."]}
            />

            <PaymentButton />
            
            <BodyText
              className="spacing--small link"
              headingFont
              text={[""]}
            />
          
          </Element>
        </Element> */}
      </Element>

      

      {/* <Element flex spaceBetween className="container col-10 spacing--after">
        <TripleBorder
          backgroundColor={colors['white']}
          className="col-10 centered--mobile"
        >
          <Element
            flex
            spaceAround
            style={{ padding: 8 }}
            className="col-10 col-8--mobile spacing--small"
          >
            <div className="col-3 col-10--mobile">
              {['twitter', 'youtube'].map(icon => (
                <Some key={icon} iconName={icon} />
              ))}
              <BodyText
                noPadding
                headingFont
                className="link"
                text={contacts}
              />
              <BodyText
                noPadding
                headingFont
                className="link"
                text={["",""]}
              />
            </div>

            <Element flex spaceBetween className="col-3 col-10--mobile">
              <a
                target="_BLANK"
                rel="noopener noreferrer"
                className="col-10 col-4--mobile"
                href="https://www.youtube.com/channel/UCq5hj2YogHzxCqqyjou2i8A"
              >
                <Image contain src={houstonLogo} alt="Sun Water Internet" />
              </a>
              <BodyText
                noPadding
                headingFont
                className="link"
                text={["",""]}
              />
            </Element>
          </Element>
        </TripleBorder>
      </Element> */}
    </Layout>
  );
};

export default IndexPage;
