import React, { Component } from 'react';
import '../style.css'
import '../App.css'
import logo from '../assets/images/logo/LogoMoveX-BBG-01.svg'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-distributed">

                    <div class="footer-left">
                        <img src={logo} />
                        {/* <h3>About<span>Eduonix</span></h3> */}

                        <p class="footer-links">
                            {/* <a href="#">Home</a> */}
                            <a href="#">Kiosk Btm</a>
                            <a href="#">Watch</a>
                            <a href="#">Card</a>
                            <a href="#">Cryptomap</a>
                            <a href="#">Blockchain</a>
                        </p>

                        <p class="footer-company-name">Copyright © 2019 All Rights Reserved by  Hashbx Global Co., LTD.</p>
                    </div>

                    <div class="footer-center">
                        <div>
                            <i class="fa fa-map-marker"></i>
                            <p><span>309 - Rupa Solitaire,
						 Bldg. No. A - 1, Sector - 1</span>
                                Mahape, Navi Mumbai - 400710</p>
                        </div>

                        <div>
                            <i class="fa fa-phone"></i>
                            <p>02-107-9115</p>
                        </div>
                        <div>
                            <i class="fa fa-envelope"></i>
                            <p><a href="mailto:support@hashbx.com">support@hashbx.com</a></p>
                        </div>
                    </div>
                    <div class="footer-right">
                        <p class="footer-company-about">
                            <span>About the company</span>
                            We offer training and skill building courses across Technology, Design, Management, Science and Humanities.</p>
                        <div class="footer-icons">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            <a href="#"><i class="fa fa-youtube"></i></a>
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default Footer;