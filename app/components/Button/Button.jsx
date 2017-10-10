import React from 'react';
import { brand } from 'data/brand';

if (process.env.BROWSER) {
  require('./style.scss');
}

export const buttonTypes = {
  close: 'close'
};

function Button (props) {
  const { children, click, type } = props;

  return (
    <p
    style={{ backgroundColor: brand.buttonColor, color: brand.buttonIconColor }}
    className={`button button--${ type }`}
    onClick={ () => click() }>{ children }</p>
  );
}

export default Button;
