import React from 'react';

if (process.env.BROWSER) {
  require('./style.scss');
}

export const descriptionTypes = {
  large: 'large',
  medium: 'medium',
  small: 'small',
};

function Description (props) {
  return (
    <div className='description'>
      <p className={`description--${props.type}`}>{ props.children }</p>
    </div>
  );
}

export default Description;
