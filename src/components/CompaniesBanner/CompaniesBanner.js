import './CompaniesBanner.scss';

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
      <Element className="container" flex>
        {isFrontPage && (
          <Element flex spaceAround className="col-10 spacing">
            <Link
              className="about__challenge-button"
              to={getTranslationPath(lang, '/challenge')}
            >
              {t('challengePage:infoButton')}
            </Link>
          </Element>
        )}
        <Element flex horizontalHalf flexStart>
            <Element flex spaceBetween autoBottomMargin className="col-10">
              <Image contain small src={news} className="col-1--mobile" />
              <BodyText
                className="col-7 col-8--mobile link"
                style={{ marginRight: '2rem' }}
                heading={{
                  title: t('Reviews'),
                  level: 'h3',
                }}
              />
            </Element>

            <BodyText
              className="spacing--small link"
              headingFont
              text={['I rarely comment on videos, but I felt that I needed to let you know: This is pedagogically beautiful. Very well done. Please don\'t let this be the last of this kind of videos.',
                'I am a newbie in this field & I must tell you this is the most amazing ML video I\'ve seen until now. Thank u so much!',
                'This is incredibly well presented. Thank you. Amazing work. A great teacher can be recognized by the ability to present information in such way, that even an absolute amateur is able to comprehend the basic concepts. And from an amateurs point of view, this is definitely the case with you.']}
            />
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
