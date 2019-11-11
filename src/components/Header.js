import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo/LogoMoveX-BBG-01.svg'

class Header extends Component {
    render() {
        return (
            <Nav>
                <Navbar>
                    <NavbarLogo>
                    <a href="#top" className="action"><LogoImg src={Logo} alt='logo'/></a>
                        {/* <Link to='/'><LogoImg src={Logo} alt='logo'/></Link> */}
                    </NavbarLogo>

                    <NavbarButton>
                        {/* <Link to='/'>HOME</Link> */}
                        <Link to='/atmbitcoin'>ATM Bitcoin</Link>
                        <Link to='/watch'>Watch</Link>
                        <Link to='/card'>Card</Link>
                        <Link to='/cryptomap'>Cryptomap</Link>
                        <Link to='/blockchain'>Blockchain</Link>
                    </NavbarButton>
                </Navbar>
            </Nav>
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
  padding: 1.5vh 6vw;
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
