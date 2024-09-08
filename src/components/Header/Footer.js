import './Footer.scss';

import React, { Component } from 'react';
import { Link } from 'gatsby';
import FooterNavigation from '../Navigation/FooterNavigation';
import { TripleBorder } from '../TripleBorder/TripleBorder';
import getTranslationPath from '../../utils/getTranslationPath';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top: 0,
      footerClass: '',
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  footer = React.createRef();

  handleScroll = () => {
    let scroll = window.scrollY;

    this.setState({
      top: scroll,
      footerClass:
        this.state.top > 10 && scroll > this.state.top ? 'footer--small' : '',
    });
  };

  render() {
    const { footerClass } = this.state;
    // const { lang } = this.props;
    const lang = 'fi';

    const isSmallFooter = footerClass === 'footer--small';

    return (
      <div
        ref={this.footer}
        className={`footer ${footerClass}`}
        style={{
          backgroundColor: footerClass !== '' ? 'transparent' : 'transparent',
        }}
      >
        <div
          className="container"
          style={{ alignItems: 'center', justifyContent: 'flex-start' }}
        >
          <Link to={getTranslationPath(lang, '/')} className="footer__logo">
            {footerClass === '' ? (
              <TripleBorder
                className="nav-item-hover"
                childrenClassName="triple-border__logo"
              >
                {'₹199 फक्त'}
              </TripleBorder>
            ) : (
              <TripleBorder
                hover
                className="nav-item-hover"
                childrenClassName="triple-border__logo"
              >
                ₹199 फक्त
              </TripleBorder>
            )}
          </Link>
        </div>
      </div>
    );
  }
}

export default Footer;
