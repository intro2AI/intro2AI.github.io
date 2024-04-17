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
import licenceIcon from '../../images/cc-logo.svg';
import mainSEOdescription from '../../content/seo/mainSEOdescription';
import mainSEOtags from '../../content/seo/mainSEOtags';
import news from '../../images/noun_news_1248039.svg';
import getTranslationPath from '../../utils/getTranslationPath';

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

            <Link
              className="frontpage-hero__cta centered about__challenge-button spacing--after--mobile"
              to={getTranslationPath(lang, '/#course-contents')}
            >
              {t('homePage:startCourseButton')}
            </Link>

            <BodyText
              className="frontpage-hero__description"
              headingFont
              text={intro}
            />
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

      <Element className="container spacing spacing--after">
        <Element className="push-right-1 push-left-1" spaceBetween flex gap='1.111rem'>
          <Element flex horizontalHalf flexStart>
            <Element flex spaceBetween autoBottomMargin className="col-10">
              <BodyText
                className="col-7 col-8--mobile link"
                style={{ marginRight: '2rem' }}
                heading={{
                  title: t('homePage:announcementsTitle'),
                  level: 'h3',
                }}
              />
            </Element>

            <BodyText
              className="spacing--small link"
              headingFont
              text={current}
            />
            
          </Element>

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
            <Element flex className="col-10 spacing" >
                <Link
                  className="about__challenge-button"
                  to={"https://docs.google.com/forms/d/e/1FAIpQLScXuUgZ4WVCb-BNZ2M0b1yQRR8wNUZg8amukog4Oz5cQ1Kslg/viewform?usp=sf_link"}
                >
                  {t('challengePage:infoButton')}
                </Link>
            </Element>
            <BodyText
              className="spacing--small link"
              headingFont
              text={[""]}
            />
          
          </Element>
        </Element>
      </Element>

      <PartBanner lang={lang} />

      {/* 
      <CompaniesBanner lang={lang} isFrontPage />
      */}         

      <Element flex spaceBetween className="container col-10 spacing--after">
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
      </Element>
    </Layout>
  );
};

export default IndexPage;
