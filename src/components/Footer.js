import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/LogoMoveX-BBG-01.svg'

class FooterN extends Component {
    render() {
        return (
            <footer className="global-footer">
                <div className="footer-content">
                    <section className="footer-info"><img src={logo}/></section>
                    <nav className="footer-directory">

                        {/* Content MoveX */}
                        <div className="ft-directory-column">
                            <input className="ft-directory-column-section-state" type="checkbox" id="ft-directory-column-section-state-products" />
                            <div className="ft-directory-column-section">
                                <label className="ft-directory-column-section-label" for="ft-directory-column-section-state-products">
                                    <h3 className="ft-directory-column-section-title">เว็บไซต์ของเรา</h3>
                                </label>
                                {/* <a href="#ft-directory-column-section-state-products" className="ft-directory-column-section-anchor ft-directory-column-section-anchor-open">
                                    <span className="ft-directory-column-section-anchor-label">เปิดเมนู</span>
                                </a>
                                <a href="#" className="ft-directory-column-section-anchor ft-directory-column-section-anchor-close">
                                    <span className="ft-directory-column-section-anchor-label">ปิดเมนู</span>
                                </a> */}
                                <ul className="ft-directory-column-section-list">
                                    <li className="ft-directory-column-section-item">
                                        <Link to="/atmbitcoin" className="ft-directory-column-section-link">Bitcoin ATM</Link>
                                    </li>
                                    <li className="ft-directory-column-section-item">
                                        <Link to="/watch" className="ft-directory-column-section-link">Smarth Watch</Link>
                                    </li>
                                    <li className="ft-directory-column-section-item">
                                        <Link to="/card" className="ft-directory-column-section-link">Card</Link>
                                    </li>
                                    <li className="ft-directory-column-section-item">
                                        <Link to="/cryptomap" className="ft-directory-column-section-link">Cryptomap</Link>
                                    </li>
                                    <li className="ft-directory-column-section-item">
                                        <Link to="/blockchain" className="ft-directory-column-section-link">Blockchain</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="ft-directory-column">
                            <div className="ft-directory-column-section">
                                <label className="ft-directory-column-section-label">
                                    <h3 className="ft-directory-column-section-title">บริการของเรา</h3>
                                </label>
                            </div>
                        </div>

                        <div className="ft-directory-column">
                            <div className="ft-directory-column-section">
                                <label className="ft-directory-column-section-label">
                                    <h3 className="ft-directory-column-section-title">สำหรับธุรกิจ</h3>
                                </label>
                            </div>
                        </div>

                        <div className="ft-directory-column">
                            <input className="ft-directory-column-section-state" type="checkbox" id="ft-directory-column-section-state-about" />
                            <div className="ft-directory-column-section">
                                <label className="ft-directory-column-section-label" for="ft-directory-column-section-state-about">
                                    <h3 className="ft-directory-column-section-title">เกี่ยวกับ MoveX</h3>
                                </label>
                                <ul className="ft-directory-column-section-list">
                                    <li className="ft-directory-column-section-item">
                                        <Link to="/" className="ft-directory-column-section-link">กิจกรรม</Link>
                                    </li>
                                    <li className="ft-directory-column-section-item">
                                        <Link to="/" className="ft-directory-column-section-link">ติดต่อเรา</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </nav>
                    <section className="ft-footer">
                        <div className="ft-footer-shop">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </div>
                        <div className="footer-legal">
                            <div className="footer-legal-copyright">Copyright © 2020 MoveX Co.,Ltd. สงวนสิทธิ์ทุกประการ</div>
                            <div className="footer-legal-links">
                                <Link to="/" className="footer-legal-link">นโยบาบความเป็นส่วนตัว</Link>
                                <Link to="/" className="footer-legal-link">ข้อกำหนดการใช้งาน</Link>
                                <Link to="/" className="footer-legal-link">ข้อมูลทางกฎหมาย</Link>
                                <Link to="/" className="footer-legal-link">แผนผังเว็บไซต์</Link>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        )
    }
}

export default FooterN;