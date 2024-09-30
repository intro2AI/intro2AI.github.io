import './Footer.scss';
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { TripleBorder } from '../TripleBorder/TripleBorder';
import getTranslationPath from '../../utils/getTranslationPath';

const Footer = () => {
  const [opacity, setOpacity] = useState(0);
  const lang = 'fi';

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 100); // Small delay to ensure the component has mounted

    return () => clearTimeout(timer);
  }, []);

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
        <Link 
          to={getTranslationPath(lang, '/about')} 
          className="footer__logo"
          style={{
            opacity: opacity,
            transition: 'opacity 1s ease-in',
          }}
        >
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