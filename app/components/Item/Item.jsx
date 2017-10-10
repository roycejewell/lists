import React from 'react';
import Title, { titleTypes } from '../Title';
import Description, { descriptionTypes } from '../Description';

if (process.env.BROWSER) {
  require('./style.scss');
}

function Item (props) {
  const { id, item, click, isCurrent, shouldFadeIn, shouldFadeOut } = props;
  const { title, short } = item;
  return (
    <div id={`item-${id}`} className={`item ${isCurrent} ${shouldFadeOut} ${shouldFadeIn}`}>
      <div onClick={ () => click() }>
        <Title cursor={'pointer'} type={titleTypes.medium}>{ title }</Title>
      </div>
      <Description type={descriptionTypes.medium}>{ short }</Description>
    </div>
  );
}

export default Item;
