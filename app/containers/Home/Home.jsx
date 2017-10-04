import React from 'react';
import Title, { titleTypes } from 'components/Title';
import Description from 'components/Description';
import Nav from 'components/Nav';
import Button from 'components/Button';
import { methods } from 'data/arrayMethods';

function renderMethods( methods, open ) {
  return methods.map( ( method, i ) => {
    return (
      <div key={i} onClick={ () => open( method ) }>
        <Title>{ method.method }</Title>
        <Description>{ method.short }</Description>
      </div>
    );
  });
}

function Home (props) {
  return (
    <div className='home'>
      <Title>Home</Title>
      { renderMethods( methods, props.actions.app.openModal) }
    </div>
  );
}

export default Home;
