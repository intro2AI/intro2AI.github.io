import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import getTranslationPath from '../../utils/getTranslationPath';

const StickyButton = ({ lang }) => {
  const { t } = useTranslation();

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000,
    }}>
      <Link
        to={getTranslationPath(lang, '/#course-contents')}
        style={{
          backgroundColor: '#00747a',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#005f64'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#00747a'}
      >
        {t('homePage:startCourseButton')}
      </Link>
    </div>
  );
};

export default StickyButton;