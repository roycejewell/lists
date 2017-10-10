import React from 'react';

if (process.env.BROWSER) {
  require('./style.scss');
}

export const buttonTypes = {
  close: 'close'
};

function Button (props) {
  const { children, click, type } = props;
  return (
    <p className={`button button--${type}`} onClick={ () => click() }>{children}</p>
  );
}

export default Button;
