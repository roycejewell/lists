import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Nav from 'components/Nav';
import Header from 'components/Header';
import Modal from 'components/Modal';
import Loader from 'components/Loader';
import Footer from 'components/Footer';
import { windowHeight } from 'services/windowSize';
//import GA from 'services/gaService';

if (process.env.BROWSER) {
  require('./style.scss');
}

function renderChildren(props) {
  return React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      actions: props.actions,
      children: props.children,
      location: props.location,
      router: props.router,
      state: props.state
    });
  });
}

function renderDevTools () {
  if (process.env.NODE_ENV === 'development') {
    const DevTools = require('../../components/DevTools').default;
    return <DevTools />;
  }
  return null;
}


class MainWrapper extends Component {

  componentDidMount() {
    //Uncomment to enable Google Analytics Page Tracking
    //GA.pageload(this.props.location.pathname);
    this.props.actions.app.initialLoad();
  }

  componentWillReceiveProps(nextProps) {

    if (process.env.BROWSER && this.props.location.pathname !== nextProps.location.pathname) {
      window.scrollTo(0, 0);
      //Uncomment to enable Google Analytics Page Tracking
      //GA.pageload(nextProps.location.pathname);
    }
  }

  render () {
    const { open, current, content, initial } = this.props.state.app;
    const { closeModal } = this.props.actions.app;
    if (process.env.BROWSER) {
      document.body.style.animation = open ? 'disableScroll 0.01s ease forwards' : 'enableScroll 0.01s ease forwards 0.65s';
    }

    return (
      <div className={ open ? 'open' : 'closed'}>
        <Loader visible={ initial }/>
        <Header location={ this.props.location }/>
        <main
          role="main"
          aria-live='polite'
          aria-relevant='additions removals'
          className='clearfix'
          style={{minHeight: windowHeight(768, -100, 150)}}>
          { renderChildren(this.props) }
          <Modal
            current={ current }
            content={ content }
            close={ closeModal }
            visible={ open }
          />
        </main>
        <Footer />
        { renderDevTools() }
      </div>
    );
  }
}

MainWrapper.propTypes = {
  actions: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired
};

export default withRouter(MainWrapper);
