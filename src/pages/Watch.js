import React, { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import VWatch from '../assets/video/Clock_MP4.mp4';
import Vwatch from '../assets/video/Clock_WebM.webm';

import Fade from 'react-reveal/Fade'

const Watch = ({ t }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <div>
            <Header />
            <div className="cryptocurrency-hero-section">
                <div className="cryptocurrency-hero-wrapper">
                    <div></div>
                    <div className="cryptocurrency-hero-content-wrapper">
                        <div className="hero-headings-wrapper white">
                            <h4 className="little-heading white cryptocurrency">The innovative for life</h4>
                            <div className="big-heading-wrapper">
                                <Fade bottom>
                                    <h1 className="big-heading upper-hero white">
                                        Smart Watch
                                        <br />
                                    </h1>
                                </Fade>
                            </div>
                            <h2 className="medium-heading white">
                                Ultimate moves with MoveX the innovative online 4G ledger which provide a unique style of life.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* video */}
            <div className="video-section smart-watch mobile">
                <div data-poster-url="" data-video-urls={`${VWatch}, ${Vwatch}`} data-autoplay="true" data-loop="true" data-wf-ignore="true" class="background-video w-background-video w-background-video-atom">
                    <video autoPlay loop muted playsInline>
                        <source src={VWatch} data-wf-ignore="true" />
                        <source src={Vwatch} data-wf-ignore="true" />
                    </video>
                    <div className="t-wrapper">
                        <h6 class="heading">Smart</h6>
                        <h3 class="h2">Watch</h3>
                    </div>
                </div>
                <div className="video-overlay"></div>
            </div>
            <div className="section cryptocurrency grey">
                <div className="feature-wrapper cryptocurrency">
                    <div className="add-columns-wrapper">

                        {/* Row Design */}
                        <div className="row">
                            <div className="icon-text-wrapper smart-watch">
                                <Fade bottom>
                                    <h3 className="heading-4 icon-title tablet cryptocurrency watch-icon-wrapper-title">Design</h3>
                                </Fade>
                                <div className="text-block-6 features smart-watch">
                                    <strong className="bold-text-3">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MoveX product has a classic look which attracts everyone. Mainly watches glow in black color. But this product gives charm look in any color. Design of this smartwatch is very graceful. Watch provides you with a sensitive touchscreen. And you do fun with music, net system, watching movies, etc. The screen of the smartwatch is very sleek and whole round body is slim. Colorful straps of smartwatches are very attractive and provide your watch spotty design.
                                        <br />
                                        <br />
                                        For protecting the smartwatch company designed with anodic oxidation technology. And protect the glass of MOVEX with the help of a heavy glass. Sync is also connected with this product. Design provides you AMOLED screen 1.39 inch. And 400 x 400 pixels. All type of networks is available in this smartwatch. Specially MOVEX MOVEX is android version. Various types of languages are provided in this product.
                                        <br />
                                        <br />
                                        With the help of MOVEX, you can measure heart rate and the company also provides you anti clock alert. The smartwatch has own CPU MTK6739. This product also supported speakers.
                                    </strong>
                                </div>
                            </div>
                        </div>

                        {/* Row Functions and feature of MOVEX MOVEX */}
                        <div className="row">
                            <div className="icon-text-wrapper smart-watch">
                                <Fade bottom>
                                    <h3 className="heading-4 icon-title tablet cryptocurrency watch-icon-wrapper-title">Functions and feature of MOVEX</h3>
                                </Fade>
                                <div className="text-block-6 features smart-watch">
                                    <strong className="bold-text-3">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MOVEX smartwatch have high feature and processor which makes help to move freely. This product has own nano sim card slot. You can talk to another person with the support of the Bluetooth function. Message function is also provided in this watch, receive messages to have a good interaction with your friends or guests. Also, have a call log, phone book with the help of you can store various contact numbers. The sync feature is available in MOVEX which more convenient to users.
                                    <br />
                                        <br />
                                        The high technology of music system available in MOVEX. You can enjoy the music playing anywhere and anytime. This product gives you a 1.39 inch AMOLED screen with 400 x 400 pixels. MOVEX has a high definition picture. The camera of the smartwatch is 2.0 MP. And capture any moment at any time or anywhere.  Nowadays selfies are more interesting. So, you can take selfies. Pedometer also provides in this product.
                                    <br />
                                        <br />
                                        MOVEX MOVEX has various other function which is very joyful for you and your family. This product has a recorder which recorder is running time reading, sing recorder, call record, etc. If we talk about network system of MOVEX. The GSM : 850 / 900 / 1800/ 1900 MHz, WCDMA : B1 / 2 / 5 and FDD-LTE : 3 / 5 / 7 / 20.  Package content: MOVEX MOVEX provide you in the package is MOVEX smart watch phone. One piece of charging dock and one charging cable.
                                    </strong>
                                </div>
                            </div>
                        </div>

                        {/* Camera */}
                        <div className="row">
                            <div className="icon-text-wrapper smart-watch">
                                <Fade bottom>
                                    <h3 className="heading-4 icon-title tablet cryptocurrency watch-icon-wrapper-title">Camera</h3>
                                </Fade>
                                <div className="text-block-6 features smart-watch">
                                    <strong className="bold-text-3">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MOVEX is the model of MOVEX brand which sets a new level of smartwatches in the market. This product of camera quality is excellent which take pictures or images are clear. Also, the camera has the HD version. MOVEX is like a mobile phone, and this is an Android version. The central processing unit of MOVEX is MTK6739. High processor cores are 1GHz. The memory is 2 GB RAM and 16 GB ROM.
                                    <br />
                                        <br />
                                        This product has compatible with OS with Android, IOS. Wireless connectivity of this MOVEX smartwatch is 3G, 4G, Bluetooth, GPS, GSM. And the network type of GSM + WCDMA + FDD + LTE. GSM frequency is 850 / 900 / 1800 / 1900 MHz, and WCDMA frequency is B1 / 2 / 5 FDD – LTE : B1 / 3 / 5 / 7 / 20. This smartwatch support 3G, GPS, Bluetooth. And the Bluetooth version of MOVEX has V4.0.
                                    </strong>
                                </div>
                            </div>
                        </div>

                        {/* Specification */}
                        <div className="row">
                            <div className="icon-text-wrapper smart-watch">
                                <Fade bottom>
                                    <h3 className="heading-4 icon-title tablet cryptocurrency watch-icon-wrapper-title">Specification</h3>
                                </Fade>
                                <div className="text-block-6 features smart-watch">
                                    <strong className="bold-text-3">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Single camera with high definition. Sim card slot has you. And also support the speaker — the picture format of this product GIF. Also gives you various music formats is AAC, AMR, MP3, WAV and video formats is 3GP, AVI, FLV, MP4, RMVB. Many different kinds of languages provide in this smartwatch has Chinese, Japanese, Korean, English, French, Russian, German, Dutch, Arabic, Persian, Thai, Hindi, Greek, Spanish and many other languages optional.
                                    <br />
                                        <br />
                                        Some additional features in this product have 2G, 3G, alarm, Bluetooth, Browser, Calculator, Calendar, E-book, GPS, MP3, MP4, and every notification shows in your smartwatch screen. MOVEX also check your Heart rate measurement, Anti-lost alert, Facebook, Messages, Music, Remote functioning, Sedentary reminder, Sleep monitoring. Package size of MOVEX MOVEX is 9.70 x 7.60 x 5.00 cm / 3.82 x 2.99 x 1.97 inches. The product weight of 0.0800 kg. Package weight of this smartwatch is 0.2200 kg.
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Watch
