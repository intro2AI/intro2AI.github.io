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

const reviewCarousel = (() => {
  if (typeof document !== "undefined") {
      const reviews = document.querySelectorAll('.review');
  } else {
      // document does not exist
  }
  let currentReviewIndex = 0;

  function showNextReview() {
    reviews[currentReviewIndex].classList.remove('active');
    currentReviewIndex++;
    if (currentReviewIndex >= reviews.length) {
      currentReviewIndex = 0;
    }
    reviews[currentReviewIndex].classList.add('active');
  }

  function start() {
    setInterval(showNextReview, 5000);
  }

  return {
    start,
  };
})();

document.addEventListener('DOMContentLoaded', reviewCarousel.start);


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
        <div class="review-carousel">
          <div class="review active">
            <h3>5/5 stars</h3>
            <p>This product is amazing! It works exactly as advertised and I am so glad I bought it.</p>
            <span class="reviewer-name">John Doe</span>
          </div>
          <div class="review">
            <h3>4/5 stars</h3>
            <p>This product is good, but it could be better. The quality is good and it works well, but the price is a bit high.</p>
            <span class="reviewer-name">Jane Smith</span>
          </div>
          <div class="review">
            <h3>3/5 stars</h3>
            <p>This product is okay. It works, but it's not great. The quality is not the best and it's a bit difficult to use.</p>
            <span class="reviewer-name">Peter Jones</span>
          </div>
        </div>
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
