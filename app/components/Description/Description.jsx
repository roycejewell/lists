import React from 'react';

if (process.env.BROWSER) {
  require('./style.scss');
}


function Description (props) {
  return (
    <p className='description'>{ props.children }</p>
  );
}

export default Description;
