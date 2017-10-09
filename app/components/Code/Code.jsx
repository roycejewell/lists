import React from 'react';

if (process.env.BROWSER) {
  require('./style.scss');
}

function Code (props) {
  return (
    <code className='code'>{ props.children }</code>
  );
}

export default Code;
