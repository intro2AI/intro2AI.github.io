import './Footer.scss';
import React from 'react';
import { Link } from 'gatsby';
import { TripleBorder } from '../TripleBorder/TripleBorder';
import getTranslationPath from '../../utils/getTranslationPath';

const Footer = () => {
  const lang = 'fi';

  return (
    <div className="footer footer--small" style={{ backgroundColor: 'transparent' }}>
      <div
        className="container"
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <Link to={getTranslationPath(lang, '/about')} className="footer__logo">
          <TripleBorder
            hover
            className="nav-item-hover"
            childrenClassName="triple-border__logo"
          >
            Buy
          </TripleBorder>
        </Link>
      </div>
    </div>
  );
};

export default Footer;