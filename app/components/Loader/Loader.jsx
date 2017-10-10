import React from 'react';

if (process.env.BROWSER) {
  require('./style.scss');
}

function Loader (props) {
  const { visible, color } = props;
  return (
    <div className={`loader ${visible ? null : 'fade'}`} style={{ backgroundColor: color }}></div>
  );
}

export default Loader;
