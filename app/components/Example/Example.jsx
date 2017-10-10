import React from 'react';
import Title, { titleTypes } from '../Title';
import Description, { descriptionTypes } from '../Description';
import Code from '../Code';

if (process.env.BROWSER) {
  require('./style.scss');
}

function Example (props) {
  const { title, description, code } = props;
  
  return (
    <div className='example'>
      <Title type={ titleTypes.small }>{ title }</Title>
      <Description type={ descriptionTypes.small }>{ description }</Description>
      <Code>{ code }</Code>
    </div>
  );
}

export default Example;
