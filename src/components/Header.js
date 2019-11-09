import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo/logo-color.png'

class Header extends Component {
    render() {
        return (
            <Nav>
                <Navbar>
                    <NavbarLogo>
                        <img src={Logo} style={{width: '140px'}} alt='logo'/>
                    </NavbarLogo>

                    <NavbarButton>
                        <Link to='/'>HOME</Link>
                        <Link to='/atmbitcoin'>ATM BITCOIN</Link>
                        <Link to='/watch'>WATCH</Link>
                        <Link to='/card'>CARD</Link>
                        <Link to='/cryptomap'>CRYPTOMAP</Link>
                        <Link to='/blockchain'>BLOCKCHAIN</Link>
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
  padding: 2vh 5vw;
  display: flex;
  align-self: center;
  background: rgba(26,26,26,0);
  transition: all 0.2s ease-out;
  justify-content: space-between;
  font-size: 18px;

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
`
const NavbarButton = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
`
