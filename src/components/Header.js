import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { Link as Scroll } from 'react-scroll';

import i18n from 'i18next';

function handleClick(lang) {
  i18n.changeLanguage(lang);
}

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pos: window.pageYOffset,
      visible: true
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    const selectElement = (element) => document.querySelector(element);

    selectElement('.mobile-menu').addEventListener('click', () => {
      selectElement('.navbar').classList.toggle('active');
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { pos } = this.state;

    const isTop = window.scrollY < 200;

    const temp = window.pageYOffset;
    const visible = pos > temp;

    if (isTop !== true) {
      this.setState({
        pos: temp,
        visible
      });
    }
  };



  render() {
    return (

      <div className={this.state.visible ? "navbar" : "navbar scrolled"}>
        <div className="container">
          <nav className="nav">
            <ul className="nav-list nav-list-mobile">
              <li className="nav-item">
                <Scroll to='main' spy={true} smooth={true} offset={0} duration={1500} className="action">
                  <Link to="/" className="nav-link-movex" />
                </Scroll>
              </li>
              <li className="nav-item">
                <div className="mobile-menu">
                  <span className="line line-top"></span>
                  <span className="line line-middle"></span>
                  <span className="line line-bottom"></span>
                </div>
              </li>

            </ul>
            <ul className="nav-list nav-list-larger">
              <li className="nav-item nav-item-hidden">
                <Scroll to='main' spy={true} smooth={true} offset={0} duration={1500} className="action">
                  <Link to="/" className="nav-link nav-link-movex" title="Home" />
                </Scroll>
              </li>

              <li className="nav-item">
                <Link to="/atmbitcoin" className="nav-link" title="Kiosk ATM">Kiosk BTM</Link>
              </li>
              <li className="nav-item">
                <Link to="/watch" className="nav-link" title="Smart Watch">Smart Watch</Link>
              </li>
              <li className="nav-item">
                <Scroll to='watch' spy={true} smooth={true} offset={0} duration={1500} className="action">
                  <Link to="/" className="nav-link" title="Coming Soon">MoveX Card</Link>
                  {/* <Link to="/card" className="nav-link">Card</Link> */}
                </Scroll>
              </li>
              <li className="nav-item">
                <Link to="/cryptomap" className="nav-link" title="Cryptomap">Cryptomap</Link>
              </li>
              <li className="nav-item">
                <Link to="/blockchain" className="nav-link" title="Blockchain">Blockchain</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link-locale nav-link-locale-en" title="United States" onClick={() => handleClick('en')} />
                <Link className="nav-link-locale nav-link-locale-th" title="Thailand" onClick={() => handleClick('th')} />
              </li>
            </ul>

          </nav>
        </div>
      </div>
    )
  }
}

export default Header;
