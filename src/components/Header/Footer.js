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
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <Link to={getTranslationPath(lang, '/')} className="footer__logo">
            {footerClass === '' ? (
              <form>
                <script
                  src="https://checkout.razorpay.com/v1/payment-button.js"
                  data-payment_button_id="pl_Ov5U4jej5bshyH"
                  data-button_height="60"
                  data-button_color="#6772e5"
                  async
                >
                </script>
              </form>
            ) : (
              <form>
                <script
                  src="https://checkout.razorpay.com/v1/payment-button.js"
                  data-payment_button_id="pl_Ov5U4jej5bshyH"
                  data-button_height="60"
                  data-button_color="#6772e5"
                  async
                >
                </script>
              </form>
            )}
          </Link>
          {/* {!isSmallFooter && <FooterNavigation lang={lang} />} */}
        </div>
      </div>
    );
  }
}

export default Footer;
