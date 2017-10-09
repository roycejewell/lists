import React from 'react';
import Title, { titleTypes } from '../Title';
import Description, { descriptionTypes } from '../Description';
import Code from '../Code';

if (process.env.BROWSER) {
  require('./style.scss');
}

function renderExamples(examples) {
  return examples.map( ( example, i ) => {
    return (
      <div className='modal__example' key={i}>
        <Title type={ titleTypes.small }>{ example.title }</Title>
        <Description type={ descriptionTypes.small }>{ example.description }</Description>
        <Code>{ example.code }</Code>
      </div>
    );
  });
}

function Modal (props) {
  const { content, close, visible, current } = props;
  const { method, short, long, examples } = content;
  const top = visible ? document.getElementById(`item-${current}`).getBoundingClientRect().top : 'none';
  const style = { top: top };

  if (process.env.BROWSER) {
    document.getElementById('modal').scrollTop = 0;
  }

  return (
    <div className={ `modal visible-${visible}` } >
      <div id='modal' className='modal__content' style={ style }>
        <p className='modal__close' onClick={ () => close() }>✕</p>
        <div className='modal__title'>
          <Title type={ titleTypes.medium }>{ content.method }</Title>
        </div>
        <div className='modal__description--short'>
          <Description type={ descriptionTypes.medium }>{ content.short }</Description>
        </div>
        <div className='modal__description--long'>
          <Description type={ descriptionTypes.medium }>{ content.long }</Description>
        </div>

        { examples ? renderExamples( examples ) : null }
      </div>
    </div>
  );
}

export default Modal;
