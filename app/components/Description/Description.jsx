import React from 'react';
import { brand } from 'data/brand';

if (process.env.BROWSER) {
  require('./style.scss');
}

export const descriptionTypes = {
  large: 'large',
  medium: 'medium',
  small: 'small',
};

function Description (props) {
  const { type, children } = props;

  return (
    <div className='description'>
      <p className={`description--${ type }`} style={{ color: brand.descriptionColor }}>{ children }</p>
    </div>
  );
}

export default Description;
