import './Some.scss';

import React from 'react';

const urls = {
  youtube:
    'https://www.youtube.com/channel/UCq5hj2YogHzxCqqyjou2i8A',
  twitter: 'https://twitter.com/KartikC14'
};

export const Some = ({ iconName }) => (
  <a target="__blank" href={urls[iconName]} className="some-logo__link">
    <img
      className="some-logo__image"
      alt={iconName}
      src={require(`../../images/some-logo__${iconName}.svg`)}
    />
  </a>
);
