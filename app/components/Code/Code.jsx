import React from 'react';

if (process.env.BROWSER) {
  require('./style.scss');
}

function Code (props) {
  const { children } = props;
  
  return (
    <code className='code'>{ children }</code>
  );
}

export default Code;
