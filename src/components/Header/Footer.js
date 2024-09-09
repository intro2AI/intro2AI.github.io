import './Footer.scss';

import React, { Component } from 'react';
import { Link } from 'gatsby';
import FooterNavigation from '../Navigation/FooterNavigation';
import { TripleBorder } from '../TripleBorder/TripleBorder';
import getTranslationPath from '../../utils/getTranslationPath';
import PaymentButton from '../IndexPage/PaymentButton';

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
      <div className="footer">
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <PaymentButton />
        </div>
    </div>
    );
  }
}

export default Footer;
