import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo/LogoMoveX-BBG-01.svg'
import '../style.css'

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
      <div className={this.state.visible ? 'nav' : 'nav scrolled'}>
        <Navbar>
          <NavbarLogo>
            <a href="#top" className="action"><LogoImg src={Logo} alt='logo' /></a>
            {/* <Link to='/'><LogoImg src={Logo} alt='logo'/></Link> */}
          </NavbarLogo>

          <NavbarButton>
            {/* <Link to='/'>HOME</Link> */}
            <Linked to='/atmbitcoin'>Kiosk BTM</Linked>
            <Linked to='/watch'>Watch</Linked>
            <Linked to='/card'>Card</Linked>
            <Linked to='/cryptomap'>Cryptomap</Linked>
            <Linked to='/blockchain'>Blockchain</Linked>
          </NavbarButton>
        </Navbar>
      </div>
    )
  }
}

export default Header;

const Nav = styled.div`
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  position: fixed;
  transition: all 0.2s ease-out;
  background: rgba(0,0,0,0.8);
`
const Navbar = styled.div`
  padding: 2vh 6vw;
  display: flex;
  align-self: center;
  background: rgba(26,26,26,0);
  transition: all 0.2s ease-out;
  justify-content: space-between;
  font-size: 16px;

  @media (max-width: 576px) {
      /* padding: 2vh 2vw;
      right: 0;
      top: 0;
      display: block;
      float: left; */
  }
`
const NavbarLogo = styled.div`
  display: flex;
  align-self: center;
`
const NavbarButton = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
`
const LogoImg = styled.img`
  width: 150px;

  &:hover {
    color: rgb(216, 69, 69);
  }
`
const Linked = styled(Link)`
  color: rgb(236, 236, 236);
  margin-right: 50px;
  text-decoration: none;
  letter-spacing: 0.1em;

  &:hover {
    color: rgb(238,67,45);
  }
`
