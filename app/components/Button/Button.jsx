import React from 'react';

if (process.env.BROWSER) {
  require('./style.scss');
}


function Button (props) {
  return (
    <div className='button'>
      <p>Button</p>
    </div>
  );
}

export default Button;
