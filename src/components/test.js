import React, { Component } from 'react'
import '../App.css';

export class test extends Component {
    componentDidMount() {
        const selectElement = (element) => document.querySelector(element);

        selectElement('.mobile-menu').addEventListener('click', () => {
            selectElement('header').classList.toggle('active');
        })
    }

    render() {
        return (
            <header>
                <div className="container">
                    <nav className="nav">
                        <ul className="nav-list nav-list-mobile">
                            <li className="nav-item">
                                <a href="#s" className="nav-link nav-link-movex"></a>
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
                                <a href="#s" className="nav-link nav-link-movex"></a>
                            </li>
                            <li className="nav-item">
                                <a href="#s" className="nav-link">Kiosk BTM</a>
                            </li>
                            <li className="nav-item">
                                <a href="#s" className="nav-link">Watch</a>
                            </li>
                            <li className="nav-item">
                                <a href="#s" className="nav-link">Card</a>
                            </li>
                            <li className="nav-item">
                                <a href="#s" className="nav-link">Cryptomap</a>
                            </li>
                            <li className="nav-item">
                                <a href="#s" className="nav-link">Blockchain</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default test;
