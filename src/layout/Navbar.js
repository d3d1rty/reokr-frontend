import React from 'react';
import { Link } from "react-router-dom";
import { Translation } from 'react-i18next';

class Navbar extends React.Component {
  handleClick() {
    document.querySelector('.Navbar__menu').classList.toggle('Navbar__menu-opened');
  }

  render() {
    return (
      <Translation ns={['layout']}>
        {
          (t, { i18n }) =>
          <nav className="Navbar">
            <div className="Navbar__header">
              <a className="Navbar__toggle" onClick={() => this.handleClick()}>Menu</a>
              <Link className="Navbar__brand Link--primary" to="/">{t('navbar.brand-name')}</Link>
            </div>
            <div className="Navbar__menu">
              <ul>
                <li><Link className="Link--dark Navbar__link" to="/sign-up">{t('navbar.sign-up-link-text')}</Link></li>
                <li><Link className="Link--dark Navbar__link" to="/login">{t('navbar.login-link-text')}</Link></li>
                <li><Link className="Link--dark Navbar__link" to="/log-out">{t('navbar.logout-link-text')}</Link></li>
              </ul>
            </div>
          </nav>
        }
      </Translation>
    );
  }
}

export default Navbar;
