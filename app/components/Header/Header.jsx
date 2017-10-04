import React from 'react';

if (process.env.BROWSER) {
  require('./style.scss');
}

function Header (props) {
  return (
    <header className='header'>
      <p>Header</p>
    </header>
  );
}

export default Header;
