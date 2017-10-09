import React from 'react';

if (process.env.BROWSER) {
  require('./style.scss');
}

function Loader (props) {
  const { visible } = props;
  return (
    <div className={`loader visible--${visible}`}></div>
  );
}

export default Loader;
