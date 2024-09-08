import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { navigate } from '@reach/router';

import './FooterNavigation.scss';

import LanguagePicker from '../LanguagePicker';
import { NavigationItem } from './Item';
import SearchLink from './SearchLink';

const getTranslationPath = (path, language) => {
  return language === 'fi' ? path : `/${language}${path}`;
};

export const getNavigation = (language, t) => {
  return [];
};

const searchIsEnabledForLang = lang => {
  return false;
};

const handleCloseMenu = () =>
  document.body.classList.remove('is-open--navigation');

const handleHamburgerClick = () => {
  document.body.classList.toggle('is-open--navigation');
};

const Navigation = props => {
  const { t, i18n } = useTranslation();
  const [navigationOpen, setNavigationOpen] = useState(false);

  const { className = '' } = props;
  const lang = i18n.language;
  const navigation = getNavigation(lang, t);
  const showSearchLink = searchIsEnabledForLang(lang);

  const onLanguageChange = newLang => {
    navigate(getTranslationPath('/', newLang));
  };

  return (
    <div className={`navigation__wrapper ${className}`}>
      <button
        aria-label="Navigation menu"
        aria-expanded={navigationOpen}
        onClick={() => {
          setNavigationOpen(prevOpen => !prevOpen);
          handleHamburgerClick();
        }}
        className="navigation__toggle"
      >
        <div className="navigation__toggle-icon" />
      </button>
      <nav>
        <ul className="navigation">
          {navigation.map(i => (
            <NavigationItem key={i.path} {...i} onClick={handleCloseMenu} />
          ))}

          {showSearchLink && <SearchLink lang={lang} />}
        </ul>
      </nav>
    </div>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
};

export default Navigation;
