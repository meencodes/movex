import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { Link as Scroll } from 'react-scroll'

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
      <div className={this.state.visible ? 'navbar' : 'navbar scrolled'}>
        <div className="container">
          <nav className="nav">
            <ul className="nav-list nav-list-mobile">
              <li className="nav-item">
                <Scroll to='main' spy={true} smooth={true} offset={0} duration={500} className="action">
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
                  <Scroll to='main' spy={true} smooth={true} offset={0} duration={500} className="action">
                    <Link to="/" className="nav-link nav-link-movex" />
                  </Scroll>
                </li>

                <li className="nav-item">
                  <Link to="/atmbitcoin" className="nav-link">Kiosk BTM</Link>
                </li>
                <li className="nav-item">
                  <Link to="/watch" className="nav-link">Watch</Link>
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

// const Nav = styled.div`
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: 999;
//   position: fixed;
//   transition: all 0.2s ease-out;
//   background: rgba(0,0,0,0.8);
// `
// const Navbar = styled.div`
  // padding: 2vh 6vw;
  // display: flex;
  // align-self: center;
  // background: rgba(26,26,26,0);
  // transition: all 0.2s ease-out;
  // justify-content: space-between;
  // font-size: 16px;

// `
// const NavbarLogo = styled.div`
  // display: flex;
  // align-self: center;
// `
// const NavbarButton = styled.div`
  // display: flex;
  // align-self: center;
  // align-items: center;
// `
// const LogoImg = styled.img`
//   width: 150px;

//   &:hover {
//     color: rgb(216, 69, 69);
//   }
// `
// const Linked = styled(Link)`
//   color: rgb(236, 236, 236);
//   margin-right: 50px;
//   text-decoration: none;
//   letter-spacing: 0.1em;

//   &:hover {
//     color: rgb(238,67,45);
//   }
// `
// const LinkLogo = styled(Link)`
//   display: inline-flex;
//   align-items: center;
// `