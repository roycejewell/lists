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
  const { type, children } = props;
  return (
    <div className='description'>
      <p className={`description--${ type }`}>{ children }</p>
    </div>
  );
}

export default Description;
