import React from 'react';
import { brand } from 'data/brand';

if (process.env.BROWSER) {
  require('./style.scss');
}

export const titleTypes = {
  large: 'large',
  medium: 'medium',
  small: 'small',
  xsmall: 'xsmall'
};

function Title (props) {
  const { cursor, type, children } = props;
  
  return (
    <div className='title'>
      <h1 style={{ cursor: cursor, color: brand.titleColor }} className={`title--${type}`}>{ children }</h1>
    </div>
  );
}

export default Title;
