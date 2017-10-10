import React from 'react';
import Title, { titleTypes } from '../Title';
import Description, { descriptionTypes } from '../Description';
import Code from '../Code';
import Example from '../Example';
import Button, { buttonTypes } from '../Button';
import { brand } from 'data/brand';

if (process.env.BROWSER) {
  require('./style.scss');
}

function renderExamples(examples) {
  return examples.map( ( example, i ) => {
    return (
      <Example
        key={ i }
        title={ example.title }
        description={ example.description }
        code={ example.code }
      />
    );
  });
}

function Modal (props) {
  const { content, close, visible, current } = props;
  const { title, short, long, examples } = content;
  const top = visible ? document.getElementById(`item-${current}`).getBoundingClientRect().top : 'none';
  const style = { top: top };

  if (process.env.BROWSER) {
    document.getElementById('modal').scrollTop = 0;
  }

  return (
    <div className='modal' style={{ backgroundColor: brand.modalAccentColor }}>
      <div id='modal' className='modal__content' style={ style }>
        <Button type={ buttonTypes.close } click={ () => close() }>✕</Button>
        <div className='modal__title'>
          <Title type={ titleTypes.medium }>{ title }</Title>
        </div>
        <div className='modal__description--short'>
          <Description type={ descriptionTypes.medium }>{ short }</Description>
        </div>
        <div className='modal__description--long'>
          <Description type={ descriptionTypes.medium }>{ long }</Description>
        </div>

        { examples ? renderExamples( examples ) : null }

      </div>
    </div>
  );
}

export default Modal;
