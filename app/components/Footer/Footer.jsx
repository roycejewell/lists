import React from 'react';
import { brand } from 'data/brand';

if (process.env.BROWSER) {
  require('./style.scss');
}

function Footer (props) {
  return (
    <footer style={{ backgroundColor: brand.footerColor }} className='footer' role='contentinfo'>

    </footer>
  );
}

export default Footer;
