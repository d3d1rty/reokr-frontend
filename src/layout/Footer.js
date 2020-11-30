import React from 'react';
import { Translation } from 'react-i18next';
import { Link } from "react-router-dom";
import logo from './footer-logo.svg';

class Footer extends React.Component {
  render() {
    return (
      <Translation ns={['layout']}>
        {
          (t, { i18n }) =>
          <footer className="Footer">
            <div className="Footer__link-list">
              <Link className="Link--dark Footer__link" to="/">{t('footer.home-link-text')}</Link>
              <Link className="Link--dark Footer__link" to="/sign-up">{t('footer.sign-up-link-text')}</Link>
              <Link className="Link--dark Footer__link" to="/login">{t('footer.login-link-text')}</Link>
            </div>
            <div className="Footer__brand-ribbon">
              <img src={logo} className="Footer__logo u-Image--responsive" alt="logo" />
              <p className="Footer__copyright">
                {t('footer.credit-text')}
                <a
                  className="Link--primary"
                  href="https://mushaka.solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &nbsp;{t('footer.company-name')}&nbsp;
                </a>
                {t('footer.copyright-statement')}
              </p>
            </div>
          </footer>
        }
      </Translation>
    );
  }
}

export default Footer;
