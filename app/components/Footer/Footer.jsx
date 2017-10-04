import React from 'react';

if (process.env.BROWSER) {
  require('./style.scss');
}

function Footer (props) {
  return (
    <footer className='footer' role='contentinfo'>
      <p>Footer</p>
    </footer>
  );
}

export default Footer;
