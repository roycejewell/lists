import React from 'react';
import { connect } from 'react-redux';
import Title from 'components/Title';

function ErrPage (props) {
  return (
    <div className='error'>
      <p>404</p>
    </div>
  );
}


export default connect(
  function mapStateToProps(state) {
    return {
      err: state.err,
    };
  },
)(ErrPage);
