import React from 'react';
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
              <span className="Navbar__brand">ReOKR</span>
            </div>
            <div className="Navbar__menu">
              <ul>
                <li><a className="Link--dark Navbar__link" href="/">Sign up</a></li>
                <li><a className="Link--dark Navbar__link" href="/">Log in</a></li>
                <li><a className="Link--dark Navbar__link" href="/">Log out</a></li>
              </ul>
            </div>
          </nav>
        }
      </Translation>
    );
  }
}

export default Navbar;
