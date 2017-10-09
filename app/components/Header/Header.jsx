import React from 'react';

if (process.env.BROWSER) {
  require('./style.scss');
}

function Header (props) {
  return (
    <header className='header'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/3/39/Simpleicons_Places_map-with-placeholder.svg' className='header__logo'/>
    </header>
  );
}

export default Header;
