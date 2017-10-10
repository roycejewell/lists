import React from 'react';

if (process.env.BROWSER) {
  require('./style.scss');
}

function Header (props) {
  const { logo } = props;
  return (
    <header className='header'>
      <img src={ logo } className='header__logo'/>
    </header>
  );
}

export default Header;
