import React from 'react';

if (process.env.BROWSER) {
  require('./style.scss');
}

export const titleTypes = {
  large: 'large',
  medium: 'medium',
  small: 'small'
};

function Title (props) {
  return (
    <div className='title'>
      { props.children }
    </div>
  );
}

export default Title;
