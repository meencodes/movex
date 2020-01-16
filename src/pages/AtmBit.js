import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Fade from 'react-reveal/Fade';
import VBticoin from '../assets/video/bitcoin_use.mp4'
import Vbitcoin from '../assets/video/bitcoin_use.webm'

export class AtmBit extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="cryptocurrency-hero-section">
                    <div className="cryptocurrency-hero-wrapper">
                        <div></div>
                        <div className="cryptocurrency-hero-content-wrapper">
                            <div className="hero-headings-wrapper white">
                                <h4 className="little-heading white cryptocurrency">The technology Bitcoin</h4>
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

                {/* video */}
                <div className="video-section atmbitcoin mobile">
                    <div data-poster-url="" data-video-urls={`${VBticoin}, ${Vbitcoin}`} data-autoplay="true" data-loop="true" data-wf-ignore="true" class="background-video w-background-video w-background-video-atom">
                        <video autoPlay loop muted playsInline>
                            <source src={VBticoin} data-wf-ignore="true" />
                            <source src={Vbitcoin} data-wf-ignore="true" />
                        </video>
                        <div className="t-wrapper">
                            <h6 class="heading">Head</h6>
                            <h3 class="h2">Text</h3>
                        </div>
                    </div>
                    <div className="video-overlay"></div>
                </div>

                <div className="section cryptocurrency">
                    <div className="feature-wrapper cryptocurrency">
                        <div className="text-feature-wrapper cryptocurrency">
                            <div className="headings-wrapper">
                                <h6 className="heading-3">REDEFINING INFRARED HEATING</h6>
                                <Fade bottom>
                                    <h3 className="heading-4 maintenace">Feature of Bitcoin Atm</h3>
                                </Fade>
                            </div>
                            <div className="text-block-5 card"></div>
                        </div>
                        <div className="add-columns-wrapper">
                            <div className="row">
                                <div className="icon-text-wrapper cryptocurrency">
                                    <Fade bottom>
                                        <h3 className="heading-4 icon-title tablet cryptocurrency cryptocurrency-icon-wrapper-title">UNIDIRECTIONAL ATM</h3>
                                    </Fade>
                                    <div className="text-block-5 features cryptocurrency">
                                        <strong className="bold-text-3">
                                            Both BATMTwo Classic and BATMTwo Large Bitcoin and cryptocurrency ATM models are unidirectional. This means that the ATM will convert cash to crypto-currency only. If you require a bi-directional machine (crypto to cash and cash to crypto) we suggest you look at our BATMThree line of ATM units.
                                        </strong>
                                    </div>
                                </div>

                                <div className="icon-text-wrapper cryptocurrency">
                                    <Fade bottom>
                                        <h3 className="heading-4 icon-title tablet cryptocurrency cryptocurrency-icon-wrapper-title">SUPPORTED CRYPTOCURRENCIES</h3>
                                    </Fade>
                                    <div className="text-block-5 features cryptocurrency">
                                        <strong className="bold-text-3">
                                            40+ cryptocurrencies supported. BTC (Bitcoin), BCH (Bitcoin Cash), ETH (Ethereum), LTC (Litecoin), DASH, XMR (Monero), DOGE (Dogecoin), ANT (Aragon Network Token), BTXX, BURST, CLOAK, SMART (SmartCash), FTO, GRS, ICG, LEO, LINDA, LSK, MAX (MaxCoin), MEC, MKR (Maker), NBT, NXT, PAC, REP, START, SUM, SYS, TKN, USDT, VIA, WDC, XMR, XZC.

                                        </strong>
                                        <br />
                                        <strong className="bold-text-3">
                                            The MOVEX developers usually do not implement alternative coins on request. Adding a new coin explicitly depends on the community and developers of those coins.
                                        </strong>
                                    </div>
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="row">
                                <div className="icon-text-wrapper cryptocurrency">
                                    <Fade bottom>
                                        <h3 className="heading-4 icon-title tablet cryptocurrency cryptocurrency-icon-wrapper-title">EXTENSIBLE</h3>
                                    </Fade>
                                    <div className="text-block-5 features cryptocurrency">
                                        <strong className="bold-text-3">
                                            Do you want to create or sell your own coins or blockchain based cryptocurrency tokens? It's easy to implement support for any coin using our open Bitcoin ATM API  as hosted on GitHub. MOVEX has support for the widest range of cryptocurrencies available and is constantly adding support for new coins.
                                        </strong>
                                    </div>
                                </div>

                                <div className="icon-text-wrapper cryptocurrency">
                                    <Fade bottom>
                                        <h3 className="heading-4 icon-title tablet cryptocurrency cryptocurrency-icon-wrapper-title">POINT OF SALE INTEGRATED</h3>
                                    </Fade>
                                    <div className="text-block-5 features cryptocurrency">
                                        <strong className="bold-text-3">
                                            Start accepting bitcoin payments for your products sold in your store via your own Bitcoin ATM. No need for an additional tablet to accept bitcoin payments in for example restaurants or stores. One awesome feature you will not find anywhere else is that staff members can receive their tips in bitcoin on their own wallet address.
                                        </strong>
                                        <br />
                                        <strong className="bold-text-3">
                                            You can also opt to automatically get your bitcoin payments converted to fiat by connecting to a payment processor. (Bitconpay.com)
                                        </strong>
                                    </div>
                                </div>
                            </div>

                            {/* Row 3 */}
                            <div className="row">
                                <div className="icon-text-wrapper cryptocurrency">
                                    <Fade bottom>
                                        <h3 className="heading-4 icon-title tablet cryptocurrency cryptocurrency-icon-wrapper-title">SECURE BY DESIGN</h3>
                                    </Fade>
                                    <div className="text-block-5 features cryptocurrency">
                                        <strong className="bold-text-3">
                                            The Bitcoin ATM Terminal only communicates with the server over HTTPS. The BATM / CAS server communicates with cryptocurrency exchanges and hot wallets. The ATM does not store any cryptocurrency itself and it is the server that takes care of this. Hotwallets for the ATM may be online or self-hosted, such as a bitcoin-core wallet running on the same server.
                                        </strong>
                                    </div>
                                </div>

                                <div className="icon-text-wrapper cryptocurrency">
                                    <Fade bottom>
                                        <h3 className="heading-4 icon-title tablet cryptocurrency cryptocurrency-icon-wrapper-title">NO VOLATILITY RISKS</h3>
                                    </Fade>
                                    <div className="text-block-5 features cryptocurrency">
                                        <strong className="bold-text-3">
                                            Unlike other Bitcoin ATM's, purchases are made on the configured cryptocurrency exchange at the time of the cash insertion. This reduces volatility risks for an operator. Operators can also choose to run in a standalone mode with no exchange involvement, perfect for those who already own the Bitcoin they want to sell. Exchange rates are updated every 30 seconds.
                                        </strong>
                                        <br />
                                        <strong className="bold-text-3">
                                            For supported exchanges: See table below.<br />
                                            For supported hot wallets: See table below.
                                        </strong>
                                    </div>
                                </div>
                            </div>

                            {/* Row 4 */}
                            <div className="row">
                                <div className="icon-text-wrapper cryptocurrency">
                                    <Fade bottom>
                                        <h3 className="heading-4 icon-title tablet cryptocurrency cryptocurrency-icon-wrapper-title">REMOTE MANAGEMENT AND MONITORING</h3>
                                    </Fade>
                                    <div className="text-block-5 features cryptocurrency">
                                        <strong className="bold-text-3">
                                            Terminal configuration is retrieved from the server by the ATM. Configuration options on the server include online terminal status, current cash box contents, exchange rate, cash transaction limits (per hour, per day, per month), customer behaviour, performed transactions and their status. The server sends end-user email notifications to the operator regarding certain events such as when transactions are made or when a certain level of cash in the terminal has been reached.
                                        </strong>
                                    </div>
                                </div>

                                <div className="icon-text-wrapper cryptocurrency">
                                    <Fade bottom>
                                        <h3 className="heading-4 icon-title tablet cryptocurrency cryptocurrency-icon-wrapper-title">REMOTE SOFTWARE UPGRADE</h3>
                                    </Fade>
                                    <div className="text-block-5 features cryptocurrency">
                                        <strong className="bold-text-3">
                                            Future software updates are distributed over the internet without the need for user intervention. This dramatically reduces operator costs as it does not need to visit the ATM in person to perform an upgrade of the machine.
                                        </strong>
                                    </div>
                                </div>
                            </div>

                            {/* Row 5 */}
                            <div className="row">
                                <div className="icon-text-wrapper cryptocurrency">
                                    <Fade bottom>
                                        <h3 className="heading-4 icon-title tablet cryptocurrency cryptocurrency-icon-wrapper-title">AML AND KYC</h3>
                                    </Fade>
                                    <div className="text-block-5 features cryptocurrency">
                                        <strong className="bold-text-3">
                                            Customers' identity can be (optionally) checked using the fingerprint reader, cell phone number verification, ID card scan or selfie verification to increase their cash limits. AML / KYC laws vary all over the world but MOVEX is the only manufacturer flexible enough to accommodate even the tightest AML / KYC regulations.
                                        </strong>
                                        <br />
                                        <strong className="bold-text-3">
                                            The MOVEX ATM server is also able to obtain customer name and address details based on a cell phone number and run instant background checks against terrorist watch lists. This is required for some markets, most noticeably in the USA.
                                        </strong>
                                    </div>
                                </div>

                                <div className="icon-text-wrapper cryptocurrency">
                                    <Fade bottom>
                                        <h3 className="heading-4 icon-title tablet cryptocurrency cryptocurrency-icon-wrapper-title">NOTIFICATIONS</h3>
                                    </Fade>
                                    <div className="text-block-5 features cryptocurrency">
                                        <strong className="bold-text-3">
                                            Your ATM can notify you when cash in the machine reaches a certain threshold when the ATM is offline for more than one hour or whenever a transaction has been made. This way you know exactly what's going on with your ATM, wherever you are.
                                        </strong>
                                    </div>
                                </div>
                            </div>

                            {/* Row 6 */}
                            <div className="row no-line">
                                <div className="icon-text-wrapper cryptocurrency">
                                    <Fade bottom>
                                        <h3 className="heading-4 icon-title tablet cryptocurrency cryptocurrency-icon-wrapper-title">OTHER FEATURES</h3>
                                    </Fade>
                                    <div className="text-block-5 features cryptocurrency">
                                        <strong className="bold-text-3">
                                            Send receipts by SMS or email. <br />
                                            Send bitcoins via SMS (recipient will receive private key).
                                        </strong>
                                    </div>
                                </div>
                            </div>


                            <div className="grey-line-wrapper">
                                <div className="div-block-9"></div>
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
