import React from 'react';
import { Translation } from 'react-i18next';
import logo from './footer-logo.svg';

class Footer extends React.Component {
  render() {
    return (
      <Translation ns={['layout']}>
        {
          (t, { i18n }) =>
          <footer className="Footer">
            <div className="Footer__link-list">
              <a className="Footer__link Link--dark" href="/">{t('footer.home-link')}</a>
              <a className="Footer__link Link--dark" href="/">Sign up</a>
              <a className="Footer__link Link--dark" href="/">Log in</a>
            </div>
            <div className="Footer__brand-ribbon">
              <img src={logo} className="Footer__logo u-Image--responsive" alt="logo" />
              <p className="Footer__copyright">
                Made with ❤️ by&nbsp;
                <a
                  className="Link--primary"
                  href="https://mushaka.solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mushaka Solutions
                </a>
                &nbsp;&copy; Copyright 2020
              </p>
            </div>
          </footer>
        }
      </Translation>
    );
  }
}

export default Footer;
