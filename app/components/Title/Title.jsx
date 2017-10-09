import React from 'react';

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
  return (
    <div className='title'>
      <h1 className={`title--${props.type}`}>{ props.children }</h1>
    </div>
  );
}

export default Title;
