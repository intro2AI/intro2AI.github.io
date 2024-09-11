import './TripleBorder.scss';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

export const TripleBorder = ({
  children,
  largeMargin,
  className,
  childrenClassName,
  backgroundColor,
  hover,
  scrollThreshold = 100,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollThreshold]);

  return (
    <div
      className={`triple-border ${className} ${
        largeMargin ? 'triple-border--large-margin' : ''
      } ${isVisible ? 'triple-border--visible' : ''}`}
      style={{
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        backgroundColor: hover && isVisible ? 'black' : 'transparent',
        color: hover && isVisible ? 'white' : 'inherit',
        padding: largeMargin ? '' : '0.2em',
        transition: 'opacity 0.3s ease-in-out, background-color 0.1s ease-in-out, color 0.1s ease-in-out',
      }}
      {...props}
    >
      <div
        className={`triple-border__container ${childrenClassName}`}
        style={{ backgroundColor: backgroundColor, zIndex: 10 }}
      >
        {children}
      </div>
    </div>
  );
};

TripleBorder.defaultProps = {
  className: '',
  childrenClassName: '',
  largeMargin: false,
  hover: false,
  backgroundColor: 'transparent',
  scrollThreshold: 100,
};

TripleBorder.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  childrenClassName: PropTypes.string,
  largeMargin: PropTypes.bool,
  backgroundColor: PropTypes.string,
  hover: PropTypes.bool,
  scrollThreshold: PropTypes.number,
};