import React from 'react';
import { Link } from 'react-router';

if (process.env.BROWSER) {
  require('./style.scss');
}

function Nav () {
  return (
    <nav className='nav'>
      <p>
        <span><Link to={'/'}>Home</Link></span>
        <span><Link to={'/about'}>About</Link></span>
        <span><Link to={'/contact'}>Contact</Link></span>
      </p>
      <h1 className='visuallyhidden'>Navigation</h1>
    </nav>
  );
}

export default Nav;
