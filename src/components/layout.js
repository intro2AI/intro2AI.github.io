import './layout.css';
import './index.scss';

import React, { Component } from 'react';
import Footer from './Header/Footer';  // Import the new Footer component
import Header from './Header/Header';
import PropTypes from 'prop-types';

class Layout extends Component {
  state = {
    siteLanguage: 'en',
  };

  componentDidMount() {
    const siteLanguage =
      window.location.pathname.indexOf('/fi') > -1
        ? 'fi'
        : window.location.pathname.indexOf('/zh') > -1
        ? 'zh'
        : 'en';
    this.setState({
      siteLanguage: siteLanguage,
    });
  }

  render() {
    const { siteLanguage } = this.state;
    const { children, hideFooter } = this.props;

    return (
      <div className="main-wrapper">
        <Header lang={siteLanguage} />
        <main className="main-content"> 
          {this.props.children}
        </main>
        {!hideFooter && <Footer lang={siteLanguage} />}
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hideFooter: PropTypes.bool,
};

Layout.defaultProps = {
  hideFooter: false,
};

export default Layout;
