import React from 'react';
import { useTranslation } from 'react-i18next';

import { Banner } from '../Banner/Banner';
import { BodyText } from '../BodyText/BodyText';
import { CompaniesBanner } from '../CompaniesBanner/CompaniesBanner';
import Element from '../Element/Element';
import Form from '../Form/Form';
import { Image } from '../Image/Image';
import Layout from '../layout';
import SEO from '../seo';
import { SubHeader } from '../SubHeader/SubHeader';
import landingImage from '../../images/mona.webp';
import mainSEOtags from '../../content/seo/mainSEOtags';

const ChallengePage = ({
  lang,
  title,
  seoDescription,
  aboutContent,
  joinContent,
}) => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO
        lang={lang}
        title={title}
        description={seoDescription}
        keywords={[
          ...mainSEOtags,
          'multiplicity',
          'generativeAI',
          'Painting',
          'Generative Art',
          'sympa',
        ]}
      />

      <Banner style={{ paddingBottom: 0, overflow: 'hidden' }}>
        <div className="container challenge__banner">
          <Image
            contain
            className="col-10"
            alt="Stacked cubes with React logo and JavaScript text"
            src={landingImage}
          />
        </div>
      </Banner>

      <Element className="container spacing">
        <SubHeader
          className="col-10col-8 push-right-1"
          text={t('challengePage:aboutTitle')}
          headingLevel="h1"
        />

        <Element className="spacing--after col-6 push-right-2">
          <BodyText headingFont text={aboutContent} />
          <BodyText
            className="spacing"
            headingFont
            heading={{
              level: 'h2',
              title: t('challengePage:joinTitle'),
            }}
            text={joinContent}
          />
          <Element flex spaceAround className="col-10 spacing" paddingBottom={2}>
                <Link
                  className="about__challenge-button"
                  to={"https://photos.app.goo.gl/dsg26Y174Q7hfnqG6"}
                >
                  {t('challengePage:registerButton')}
                </Link>
          </Element>
        </Element>
      </Element>

      <SubHeader
        className="col-10 spacing--after centered"
        text="#GenerativeArt"
        headingLevel="h3"
      />
    </Layout>
  );
};

export default ChallengePage;
