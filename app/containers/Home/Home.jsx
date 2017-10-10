import React from 'react';
import Title, { titleTypes } from 'components/Title';
import Description, { descriptionTypes } from 'components/Description';
import Nav from 'components/Nav';
import BrandHeader from 'components/BrandHeader';
import Item from 'components/Item';
import { items } from 'data/items';
import { brand } from 'data/brand';

if (process.env.BROWSER) {
  require('./style.scss');
}

function renderItems({items, current, open, openModal}) {
  return items.map( ( item, i ) => {
    const shouldFadeOut = (i !== current) && open ? 'item--fadeOut' : '';
    const shouldFadeIn = (i !== current) && !open ? 'item--fadeIn' : '';
    const isCurrent = i == current ? 'item--current' : '';

    return (
      <Item
        key={ i }
        id={ i }
        item={ item }
        click={ () => openModal( item, i ) }
        isCurrent={ isCurrent }
        shouldFadeIn={ shouldFadeIn }
        shouldFadeOut={ shouldFadeOut }
      />
    );
  })
}

function Home (props) {
  const { openModal, closeModal } = props.actions.app;
  const { current, open } = props.state.app;

  return (
    <div className='home'>
      <BrandHeader
        title={ brand.title }
        description={ brand.description }
      />
      { renderItems({items, current, open, openModal}) }
    </div>
  );
}

export default Home;
