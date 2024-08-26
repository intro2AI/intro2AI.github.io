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
          <Element flex spaceAround className="col-10 spacing" paddingBottom={2}>
            <a
              className="about__challenge-button"
              href="upi://pay?pa=kartik.niszoig-2@oksbi&pn=KARTIK CHINCHOLIKAR&cu=INR&am=100"
            >
              {t('challengePage:infoButton')}
            </a>
          </Element>
          {/* <Element flex spaceAround className="col-10 spacing" paddingBottom={2}>
            <Link
              className="about__challenge-button"
              to={"https://docs.google.com/forms/d/e/1FAIpQLScXuUgZ4WVCb-BNZ2M0b1yQRR8wNUZg8amukog4Oz5cQ1Kslg/viewform?usp=sf_link"}
            >
              {t('challengePage:infoButton')}
            </Link>
          </Element> */}
        </Element>
      </Element>

      <PartBanner lang={lang} />
      {/* <Footer lang={lang} /> */}
      
    </Layout>
  );
};

export default AboutPage;
