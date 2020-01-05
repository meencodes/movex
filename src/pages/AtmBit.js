import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Fade from 'react-reveal/Fade';

export class AtmBit extends Component {
    render() {
        return (
            <div>
                {/* <Header /> */}
                <div className="cryptocurrency-hero-section">
                    <div className="cryptocurrency-hero-wrapper">
                        <div></div>
                        <div className="cryptocurrency-hero-content-wrapper">
                            <div className="hero-headings-wrapper white">
                                <h4 className="little-heading white cryptocurrency">The technology cryptocurrency</h4>
                                <div className="big-heading-wrapper">
                                    <Fade bottom>
                                        <h1 className="big-heading upper-hero white">
                                            CRYPTO
                                        <br />
                                            CURRENCY ATM
                                        <br />
                                        </h1>
                                    </Fade>
                                </div>
                                <h2 className="medium-heading white">
                                    Some Bitcoin ATMs offer bi-directional functionality enabling both the purchase of Bitcoin as well as the sale of Bitcoin for cash.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default AtmBit
