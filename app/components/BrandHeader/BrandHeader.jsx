import React from 'react';
import Title, { titleTypes } from '../Title';
import Description, { descriptionTypes } from '../Description';

if (process.env.BROWSER) {
  require('./style.scss');
}

function BrandHeader (props) {
  const { title, description } = props;
  return (
    <div className='brand-header'>
      <Title type={ titleTypes.large }>{ title }</Title>
      <Description type={ descriptionTypes.large }>{ description }</Description>
    </div>
  );
}

export default BrandHeader;
