import React, { useEffect, useState, Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { Link as Scroll } from 'react-scroll';
import SubHead from '../components/SubHead'

import i18n from 'i18next';
import { translate } from 'react-i18next';

import LogoDark from '../assets/images/logo/image_small_dark.svg';
import LogoWhite from '../assets/images/logo/image_small.svg';

// class Header extends Component {
//   render() {
//     return (
//       <div className="black-nav-wrapper">
//         <div className="navbar w-nav">
//           <div className="navbar-inner-container">
//             <div className="navbar-inner">
//               <div className="nav-menu-wrapper">
//                 <Scroll to='main' spy={true} smooth={true} offset={0} duration={1500} className="brand w-nav-brand">
//                   <Link to="/" className="w-nav-brand">
//                     <img src={LogoDark} alt="MoveX logo image" className="image-4" />
//                     <img src={LogoWhite} alt="white-logo" className="image-49"></img>
//                   </Link>
//                 </Scroll>
//                 <nav className="nav-menu w-nav-menu">
//                   <Link to="/atmbitcoin" className="nav-link w-nav-link w--current">Kiosk BTM</Link>
//                   <Link to="/watch" className="nav-link w-nav-link">Smart Watch</Link>
//                   <Link to="/card" className="nav-link w-nav-link">Card</Link>
//                   <Link to="/cryptomap" className="nav-link w-nav-link">Cryptomap</Link>
//                   <Link to="/blockchain" className="nav-link w-nav-link">Blockchain</Link>
//                 </nav>

//                 <div className="menu-button w-nav-button">
//                   <div className="mobile-menu-icon-wrapper">
//                     <div className="text-block-10">Menu</div>
//                     <img src="https://uploads-ssl.webflow.com/5db82a0cfce78613669ce21c/5dbac64db626f5169d44430c_Group%2040.svg" alt="mobile menu icon" class="mobile-none" />
//                   </div>
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default translate()(Header);

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
                  <Link to="/" className="nav-link nav-link-movex" />
                </Scroll>
              </li>

              <li className="nav-item">
                <Link to="/atmbitcoin" className="nav-link">Kiosk BTM</Link>
              </li>
              <li className="nav-item">
                <Link to="/watch" className="nav-link">Smart Watch</Link>
              </li>
              <li className="nav-item">
                <Link to="/card" className="nav-link">Card</Link>
              </li>
              <li className="nav-item">
                <Link to="/cryptomap" className="nav-link">Cryptomap</Link>
              </li>
              <li className="nav-item">
                <Link to="/blockchain" className="nav-link">Blockchain</Link>
              </li>
            </ul>

          </nav>
        </div>
      </div>
    )
  }
}

export default Header;
