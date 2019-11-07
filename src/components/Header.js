import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <Nav>
                <Navbar>
                    <NavbarLogo>
                        <Link to='/'>LOGO</Link>
                    </NavbarLogo>

                    <NavbarButton>
                        <Link to='/'>HOME</Link>
                        <Link to='/atmbitcoin'>ATM</Link>
                        <Link to='/watch'>WATCH</Link>
                        <Link to='/card'>CARD</Link>
                        <Link to='/cryptomap'>CRYPTOMAP</Link>
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
`
const Navbar = styled.div`
  padding: 5vh 5vw;
  display: flex;
  align-self: center;
  background: rgba(26,26,26,0);
  transition: all 0.2s ease-out;
  justify-content: space-between;
  font-size: 20px;
`
const NavbarLogo = styled.div`
    display: flex;
`
const NavbarButton = styled.div`
    display: flex;
    align-self: center;
    align-items: center;
`