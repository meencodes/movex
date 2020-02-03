import React, { useEffect } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

import Tick from '../assets/images/cryptomap/Tick.svg';
import AppStore from '../assets/images/cryptomap/AppStore.svg'
import AppleStore from '../assets/images/cryptomap/AppleStore.svg'
import { Fade, Bounce } from 'react-reveal';

import Large from '../assets/images/cryptomap/MockUp-Large.png';
import Medium from '../assets/images/cryptomap/MockUp-Medium.png';
import Small from '../assets/images/cryptomap/MockUp-Small.png';

const Cryptomap = ({ t }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
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

            <div className="t-wrapper app download">
                <div className="headings-image-wrapper">
                    <div className="download-headings-wrapper">
                        <div className="upper-headings">
                            <h6 className="heading-2 app">Now Available</h6>
                            <Bounce>
                                <h2 className="h2 convenience app">DOWNLOAD CRYPTOMAP APP</h2>
                            </Bounce>
                            <h3 className="h3 app">Cryptomap app is available for Android and iOS. Click on the link below to download the app through the Google Play Store or the App Store.</h3>
                        </div>
                    </div>
                    <div className="convenience-image-wrapper">
                        <img src="https://uploads-ssl.webflow.com/5db82a0cfce78613669ce21c/5db873c767b28f16d291418e_MockUp2%201.png" alt="" srcSet={`${Small} 500w, ${Medium} 800w, ${Large} 1059w`} sizes="(max-width: 479px) 100vw, (max-width: 767px) 83vw, (max-width: 991px) 85vw, 47vw" className="image-10" />
                    </div>
                </div>
                <div className="phone-logos-wrapper app">
                    <a href="https://play.google.com/store/apps/details?id=com.application.cryptomap&hl=th" rel="noopener noreferrer" target="_blank" className="w-inline-block">
                        <img src={AppStore} alt="" className="image-9 app" />
                    </a>
                    <a href="https://apps.apple.com/th/app/cryptomap/id1493994965?l=th" rel="noopener noreferrer" target="_blank" className="link-block-3 w-inline-block">
                        <img src={AppleStore} alt="" className="image-41" />
                    </a>
                </div>
            </div>

            <div className="container-5 app w-container">
                <div className="wrapper-2 app">
                    <h6 className="heading-3 get-solus">GET Cryptomap</h6>
                    <Fade bottom>
                        <h3 className="heading-4 cryptocurrency">join cryptomap</h3>
                    </Fade>
                    <div className="text-block-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
                </div>
                <a href="https://cryptomap.org/" className="button-2 w-button" target="_blank">Get Cryptomap</a>
            </div>
            <Footer />
        </div>
    )
}

export default Cryptomap
