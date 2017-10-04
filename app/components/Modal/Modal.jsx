import React from 'react';

if (process.env.BROWSER) {
  require('./style.scss');
}

function renderExamples(examples) {
  return examples.map( ( example, i ) => {
    return (
      <div key={i}>
        <p>{ example.title }</p>
        <p>{ example.description }</p>
        <p>{ example.code }</p>
      </div>
    );
  });
}

function Modal (props) {
  const { content, close, visible } = props;
  const { method, short, long, examples } = content;

  return (
    <div className={`modal visible-${visible}`}>
      <div className='modal__content'>
        <p>{ method }</p>
        <p>{ short }</p>
        <p>{ long }</p>
        <p onClick={ () => close() }>close</p>
      </div>
    </div>
  );
}

export default Modal;
