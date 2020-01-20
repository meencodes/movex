import React, { Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

import Tick from '../assets/images/cryptomap/Tick.svg';
import Fade from 'react-reveal/Fade';

export class Cryptomap extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="app-hero-section">
                    <div className="app-hero-content-wrapper">
                        <div className="column left hero-one">
                            <div className="hero-headings-wrapper app">
                                <h4 className="little-heading app-hero">Function control</h4>
                                <div className="big-heading-wrapper">
                                    <Fade bottom>
                                        <h1 className="big-heading upper-hero">Cryptomap App<br /></h1>
                                    </Fade>
                                    {/* <h2 class="medium-heading medium-hero-app">Application</h2> */}
                                    <h2 className="medium-heading">
                                        Search for shops, cafes, accommodations, tourist attractions
                                        Accept payments with Crypto currencies.
                                        <br />
                                        <br />
                                    </h2>
                                </div>
                            </div>
                            <div className="check-text-wrapper">
                                <div class="check-text">
                                    <img src={Tick} alt="check icon" class="image-29" />
                                    <h5 class="h4 app"><strong>5555</strong></h5>
                                </div>
                                <div class="check-text">
                                    <img src={Tick} alt="check icon" class="image-29" />
                                    <h5 class="h4 app"><strong>66666</strong></h5>
                                </div>
                                <div class="check-text">
                                    <img src={Tick} alt="check icon" class="image-29" />
                                    <h5 class="h4 app"><strong>77777</strong></h5>
                                </div>
                                <div class="check-text">
                                    <img src={Tick} alt="check icon" class="image-29" />
                                    <h5 class="h4 app"><strong>77777</strong></h5>
                                </div>
                            </div>
                        </div>
                        <div className="column right app icon">
                            <Fade bottom>
                                <div className="app-hero-wrapper">

                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Cryptomap
