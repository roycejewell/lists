import React from 'react';
import { brand } from 'data/brand';

if (process.env.BROWSER) {
  require('./style.scss');
}

function Header (props) {
  return (
    <header className='header' style={{ backgroundColor: brand.backgroundColor }}>
      <img src={ brand.logo } className='header__logo'/>
    </header>
  );
}

export default Header;
