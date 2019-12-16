import React, { Component } from 'react';
import '../style.css'
import logo from '../assets/images/logo/LogoMoveX-BBG-01.svg'

class Footer extends Component {
    render() {
        return (
            // <div className="footer">
            //     <div className="footer-distributed">

            //         <div class="footer-left">
            //             <img src={logo} />

            //             <p class="footer-links">

            //                 <a href="#d">Kiosk Btm</a>
            //                 <a href="#d">Watch</a>
            //                 <a href="#d">Card</a>
            //                 <a href="#d">Cryptomap</a>
            //                 <a href="#d">Blockchain</a>
            //             </p>

            //             <p class="footer-company-name">Copyright © 2019 All Rights Reserved by  Hashbx Global Co., LTD.</p>
            //         </div>

            //         <div class="footer-center">
            //             <div>
            //                 <i class="fa fa-map-marker"></i>
            //                 <p><span>309 - Rupa Solitaire,
            // 			 Bldg. No. A - 1, Sector - 1</span>
            //                     Mahape, Navi Mumbai - 400710</p>
            //             </div>

            //             <div>
            //                 <i class="fa fa-phone"></i>
            //                 <p>02-107-9115</p>
            //             </div>
            //             <div>
            //                 <i class="fa fa-envelope"></i>
            //                 <p><a href="mailto:support@hashbx.com">support@hashbx.com</a></p>
            //             </div>
            //         </div>
            //         <div class="footer-right">
            //             <p class="footer-company-about">
            //                 <span>About the company</span>
            //                 We offer training and skill building courses across Technology, Design, Management, Science and Humanities.</p>
            //             <div class="footer-icons">
            //                 <a href="#dd"><i class="fa fa-facebook"></i></a>
            //                 <a href="#dd"><i class="fa fa-twitter"></i></a>
            //                 <a href="#dd"><i class="fa fa-instagram"></i></a>
            //                 <a href="#dd"><i class="fa fa-youtube"></i></a>
            //             </div>
            //         </div>

            //     </div>
            // </div>

            <div className="footer contact">
                <div className="footer-columns w-container">
                    <div className="footer-columns-header"><img src={logo} alt="movex white logo" /></div>
                    <div className="footer-links">
                        <div className="first-line">
                            <div className="footer-links-item _1">
                                <h3 className="footer-list-item"><a href="#ss" className="footer-link w--current">Overview</a></h3>
                                <ul className="footer-list">
                                    <li className="footer-list-item"><a href="#ss" className="footer-link">BTM Kiosk</a></li>
                                    <li className="footer-list-item"><a href="444" className="footer-link">Watch</a></li>
                                    <li className="footer-list-item"><a href="444" className="footer-link">Card</a></li>
                                    <li className="footer-list-item"><a href="444" className="footer-link">Cryptomap</a></li>

                                </ul>
                            </div>
                            <div className="footer-links-item">
                                <h3 className="footer-list-item mobile-invisible"><a href="#hhh" className="footer-link">FAQ</a></h3>
                                <ul className="footer-list">
                                    <li className="footer-list-item"><a href="#hhh"></a></li>
                                </ul>
                            </div>
                            <div className="footer-links-item">
                                <h3 className="footer-list-item"><a href="#sss" className="footer-link">Contact us</a></h3>
                                <ul className="footer-list">
                                    <li className="footer-list-item"><a href="#sss"></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-links-item bigger">
                            <h3 className="footer-heading">Join our newsletter</h3>
                        </div>
                        <div className="footer-links-item">
                            <h3 className="footer-heading">Follow us</h3>
                            <div class="social-logos-wrapper foot">
                                <a href="https://www.facebook.com/Koleda.Co/" target="_blank" class="w-inline-block" />
                                <img src="https://assets.website-files.com/5db82a0cfce78613669ce21c/5db94bb62067faede0895613_Facebook.svg" alt="facebook icon" width="10" class="image-15" />
                                <a href="https://www.instagram.com/koleda.co/" target="_blank" class="w-inline-block" />
                                <img src="https://assets.website-files.com/5db82a0cfce78613669ce21c/5db94bb673588376c1dce171_Instagram.svg" alt="instagram icon" class="image-17" />
                            </div>
                        </div>
                    </div>

                    <div className="white-orange-headings-wrapper">
                        <h3 className="heading-6">MoveX for business?</h3>
                        <h3 className="heading-7">
                            <a href="mailto:max.interbrick@movex.co" class="link-4">Learn more</a>
                        </h3>
                    </div>
                    <div className="last-title-headings">
                        <h4 className="heading-8 footer">© 2019 MOVEX</h4>
                    </div>
                </div>
            </div>

        )
    }
}

export default Footer;