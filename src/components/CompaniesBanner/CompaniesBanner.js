import './CompaniesBanner.scss';

import codeconduct from '../../images/codeconduct.svg';
import { Banner } from '../Banner/Banner';
import { BodyText } from '../BodyText/BodyText';
import { ContentLiftup } from '../ContentLiftup/ContentLiftup';
import Element from '../Element/Element';
import { Image } from '../Image/Image';
import { Link } from 'gatsby';
import { PropTypes } from 'prop-types';
import React from 'react';
import snakeCase from 'lodash/fp/snakeCase';
import { useTranslation } from 'react-i18next';
import getTranslationPath from '../../utils/getTranslationPath';
import news from '../../images/noun_news_1248039.svg';

const partners = [

];



/* All logos must be in SVG format */
const inChallenge = [
  'Tivia',
  'Relex',
  'Smartly.io',
  'Eficode',
  'Sympa',
  'Cinia',
  'AppGyver',
  'Codento',
  'Taito united',
  'Emblica',
  'Kodan',
  'UpCloud',
  'Perfektio',
  'Blok',
  'G-Works',
  'Webscale',
  'Siili',
  'Ilmatieteenlaitos',
  'Futurice',
  'Visma',
  'Platonic Partnership',
  'Omnia',
  'Tietotalo',
  'Circles',
  'Nordcloud',
  'Wunderdog',
  'Gofore',
  'Nortal Oy',
  'NurseBuddy',
  'Wolt',
  'Pori',
  'Motley',
  'Bonsky Digital',
  'Plan Brothers',
  'Integrify',
  'Rentle',
  'Compile',
  'Telia',
  'Umbrella Interactive',
  'Tabella',
  'Nextup',
  // 'Vertix',
  // 'Future Captcha Consulting',
  'Kela',
  'Geometrix',
  'Netyourself',
  'Vincit',
  'Vero',
  'Hiq',
  'Resilient E',
  'Neemia',
  'Bubblin',
  "Zaibatsu"
];

export const CompaniesBanner = ({ isFrontPage, lang }) => {
  const { t } = useTranslation();

  return (
    <Banner
      backgroundColor={isFrontPage && 'white'}
      className="spacing--after"
      id="challenge"
    >
      <Element className="container spacing spacing--after">
        <Element className="push-right-1 push-left-1" spaceBetween flex gap='1.111rem'>

          <Element flex horizontalHalf flexStart>
              <Element flex spaceBetween autoBottomMargin className="col-10">
                <BodyText
                  className="col-7 col-8--mobile link"
                  style={{ marginRight: '2rem' }}
                  heading={{
                    title: t('Testimonials from Happy Learners'),
                    level: 'h3',
                  }}
                />
              </Element>

              <BodyText
                className="spacing--small link"
                headingFont
                fontStyle="italic"
                text={[
        'I am a newbie in this field & I must tell you this is the most amazing <a href="https://www.youtube.com/watch?v=BePQBWPnYuE">ML video</a> I\'ve seen until now. Thank u so much! - Shilpa Rani',
          
                'This is a super strong and well-made <a href="https://www.youtube.com/watch?v=BePQBWPnYuE">bit of exposition</a>.(on the Manifold Hypothesis) Well done! - Anil Keshwani',
                '',
              ]}
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
                    title: t('homePage:codeConduct'),
                    level: 'h3',
                  }}
                />
              </Element>
              
              <BodyText
                className="spacing--small link"
                headingFont
                text={[  
                'We are pleased to offer a 9-hour course divided into three parts.<br>Participation in Part 0 is free of cost, providing a non-trivial introduction to the course content. For details regarding the fees associated with Part 1 and Part 2, please refer to the fee structure <a href="https://intro2ai.github.io/en/faq">here</a>.',
                ]}
              />

              {isFrontPage && (
              <Element flex spaceAround className="col-10 spacing" paddingBottom={2}>
                <Link
                  className="about__challenge-button"
                  to={"https://docs.google.com/forms/d/e/1FAIpQLScXuUgZ4WVCb-BNZ2M0b1yQRR8wNUZg8amukog4Oz5cQ1Kslg/viewform?usp=sf_link"}
                >
                  {t('challengePage:infoButton')}
                </Link>
              </Element>
              )}
          </Element>

          
        </Element>
      </Element>
    </Banner>
  );
};

CompaniesBanner.defaultProps = {
  isFrontPage: false,
  lang: 'fi',
};

CompaniesBanner.propTypes = {
  isFrontPage: PropTypes.bool,
  lang: PropTypes.string.isRequired,
};
