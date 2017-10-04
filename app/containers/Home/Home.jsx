import React from 'react';
import Title, { titleTypes } from 'components/Title';
import Description from 'components/Description';
import Nav from 'components/Nav';
import Button from 'components/Button';
import { methods } from 'data/arrayMethods';

if (process.env.BROWSER) {
  require('./style.scss');
}

function renderMethods( methods, openModal, current, closeModal, open ) {
  return methods.map( ( method, i ) => {
    const shouldFadeOut = (i !== current) && open ? 'item--fadeOut' : '';
    const shouldFadeIn = (i !== current) && !open ? 'item--fadeIn' : '';
    
    if( i === current ) {
      return (
        <div key={i} className={`item ${shouldFadeOut} ${shouldFadeIn}`}>
          <div className='item__exit' onClick={ () => closeModal() }>
            <Title>X</Title>
          </div>
          <div onClick={ () => openModal( method, i ) }>
            <Title>{ method.method }</Title>
          </div>
          <Description>{ method.short }</Description>
        </div>
      );
    }
    else {
      return(
        <div key={i} className={`item ${shouldFadeOut} ${shouldFadeIn}`}>
          <div onClick={ () => openModal( method, i ) }>
            <Title>{ method.method }</Title>
          </div>
          <Description>{ method.short }</Description>
        </div>
      );
    }
  });
}

function Home (props) {
  const { openModal, closeModal } = props.actions.app;
  const { current, open } = props.state.app;

  return (
    <div className='home'>
      { renderMethods( methods, openModal, current, closeModal, open ) }
    </div>
  );
}

export default Home;
