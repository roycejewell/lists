import React from 'react';
import Title, { titleTypes } from 'components/Title';
import Description, { descriptionTypes } from 'components/Description';
import Nav from 'components/Nav';
import { methods } from 'data/arrayMethods';
import { brand } from 'data/brandData';

if (process.env.BROWSER) {
  require('./style.scss');
}

function Home (props) {
  const { openModal, closeModal } = props.actions.app;
  const { current, open } = props.state.app;

  return (
    <div className='home'>
      <div className='home__header'>
        <Title type={ titleTypes.large }>{ brand.title }</Title>
        <Description type={ descriptionTypes.large }>{ brand.description }</Description>
      </div>
      { methods.map( ( method, i ) => {
          const shouldFadeOut = (i !== current) && open ? 'item--fadeOut' : '';
          const shouldFadeIn = (i !== current) && !open ? 'item--fadeIn' : '';
          const isCurrent = i == current ? 'item--current' : '';
          return (
            <div key={i} id={`item-${i}`} className={`item ${isCurrent} ${shouldFadeOut} ${shouldFadeIn}`}>
              <div onClick={ () => openModal( method, i ) }>
                <Title cursor={'pointer'} type={titleTypes.medium}>{ method.method }</Title>
              </div>
              <Description type={descriptionTypes.medium}>{ method.short }</Description>
            </div>
          );
        })
      }
    </div>
  );
}

export default Home;
