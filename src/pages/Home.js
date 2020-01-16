import React, { Component } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

//Watch
import Small from '../assets/images/watch/watch_small.png';
import Medium from '../assets/images/watch/watch_medium.png';
import Large from '../assets/images/watch/watch_large.png';

//BTM
import BtmLarge from '../assets/images/btm/large-kiosk.png';
import BtmLarge01 from '../assets/images/btm/large-kiosk-01.png';
import BtmSmall from '../assets/images/btm/small-kiosk.png';
import BtmSmall01 from '../assets/images/btm/small-kiosk-01.png'

//Map
import Map from '../components/Map';
import { Typography, Container } from '@material-ui/core'


import TrendingUpIcon from '@material-ui/icons/TrendingUpRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';

import '../App.css';
import '../bootstrap-touch-slider.css';
import $ from 'jquery';

import Fade from 'react-reveal/Fade';

import { translate } from 'react-i18next'

// import { Link } from 'react-router-dom';
// import { Link as Scroll } from 'react-scroll';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyD6aGyzvfGlncrrGbEe1M5OwKbOuSGpegk`;
const Home = ({ t }) => {
    return (
        <div id='main'>

            <Header />

            <div id="bootstrap-touch-slider" className="carousel bs-slider fade  control-round indicators-line" data-ride="carousel" data-pause="hover" data-interval="5000" >


                <div class="carousel-indicators">
                    <li data-target="#bootstrap-touch-slider" data-slide-to="0" class="active"></li>
                    <li data-target="#bootstrap-touch-slider" data-slide-to="1"></li>
                </div>


                <div class="carousel-inner" role="listbox">


                    <div class="item active slide_1">


                        <div class="bs-slider-overlay"></div>

                        <div class="container">
                            <div class="row">
                                <div class="slide-text slide_style_left kanit">
                                    <h1 data-animation="animated fadeInRight">OPEN NOW !</h1>
                                    <h2 data-animation="animated fadeInLeft">MOVEX,</h2>
                                    <br />

                                </div>
                            </div>
                        </div>

                        {/* <Session2>
                                <Scroll
                                    className="action"
                                    to='about-section'
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    <span className="action_icon">
                                        <img src={arrow} style={{ width: '23px', height: '23px' }} alt="action" />
                                    </span>
                                    <span className="action_message">Product</span>
                                </Scroll>
                            </Session2> */}
                    </div>



                    <div class="item slide_2">


                        <div class="bs-slider-overlay"></div>

                        <div class="container">
                            <div class="row">

                                <div class="slide-text slide_style_left">
                                    <h1 data-animation="animated fadeInRight">E<img src="/images/logo-2-white.png" class="logo-2-small" />ANYWHERE
                            <br />ELECTRIC FOR ANY CARS</h1>
                                    <br />
                                    <a href="https://itunes.apple.com/th/app/ea-anywhere/id1240656004" target="_blank" class="btn btn-store" data-animation="animated fadeInLeft">
                                        <img src="/images/app_store_btn.png" alt="" />
                                    </a>
                                    <a href="https://play.google.com/store/apps/details?id=evcl.energyabsolute.co.th.evcl" target="_blank" class="btn btn-store" data-animation="animated fadeInRight">
                                        <img src="/images/play_store_btn.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="item slide_3">


                        <div class="bs-slider-overlay"></div>

                        <div class="slide-text slide_style_right">
                            <h1 data-animation="animated flipInX">E<img src="/images/logo-2-white.png" class="logo-2-small" />ANYWHERE
                    <br />ELECTRIC FOR ANY CARS</h1>

                            <br />
                            <a href="https://itunes.apple.com/th/app/ea-anywhere/id1240656004" target="_blank" class="btn btn-store" data-animation="animated fadeInLeft">
                                <img src="/images/app_store_btn.png" alt="" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=evcl.energyabsolute.co.th.evcl" target="_blank" class="btn btn-store" data-animation="animated fadeInRight">
                                <img src="/images/play_store_btn.png" alt="" />
                            </a>
                        </div>
                    </div>


                    <div class="item active slide_4">


                        <div class="bs-slider-overlay"></div>

                        <div class="container">
                            <div class="row">

                                <div class="slide-text slide_style_right kanit">
                                    <h1 data-animation="animated fadeInRight">{t('open')}</h1>
                                    <h2 data-animation="animated fadeInLeft">MoveX</h2>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <a class="left carousel-control" href="#bootstrap-touch-slider" role="button" data-slide="prev">
                    <span class="fa fa-angle-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>

                <a class="right carousel-control" href="#bootstrap-touch-slider" role="button" data-slide="next">
                    <span class="fa fa-angle-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            {/* New 4 Section */}
            <div className="section four-section">
                <div className="four w-container">
                    <Fade bottom>
                        <h3 className="heading-4 four-heading">Four Section</h3>
                    </Fade>
                    <Fade bottom>
                        <div className="four-wrapper upper">
                            <div className="text-wrapper four">
                                <img src="https://assets.website-files.com/5db82a0cfce78613669ce21c/5ddba9c5d31f0f86116d05ee_Group%2073.svg" alt="" className="image-50" />
                                <div className="icon-text-wrapper">
                                    <h3 className="heading-4 icon-title tablet home-four">Payment Service</h3>
                                    <div className="text-block-5 four">
                                        <strong className="bold-text-2">{t('four.payment')}</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="text-wrapper four _2">
                                <img src="https://assets.website-files.com/5db82a0cfce78613669ce21c/5ddbaa14967a3b1cf83a2bf5_Group%2075.svg" alt="" className="image-50" />
                                <div className="icon-text-wrapper">
                                    <h3 className="heading-4 icon-title tablet home-four">Platform</h3>
                                    <div className="text-block-5 four">
                                        <strong className="bold-text-2">{t('four.platform')}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="four-wrapper lower">
                            <div className="text-wrapper four _3">
                                <img src="https://assets.website-files.com/5db82a0cfce78613669ce21c/5ddbaa14967a3b1cf83a2bf5_Group%2075.svg" alt="" className="image-50" />
                                <div className="icon-text-wrapper">
                                    <h3 className="heading-4 icon-title tablet home-four">Coin implementation</h3>
                                    <div className="text-block-5 four">
                                        <strong className="bold-text-2">{t('four.coinimplement')}</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="text-wrapper four _4">
                                <img src="https://assets.website-files.com/5db82a0cfce78613669ce21c/5ddbaa14967a3b1cf83a2bf5_Group%2075.svg" alt="" className="image-50" />
                                <div className="icon-text-wrapper">
                                    <h3 className="heading-4 icon-title tablet home-four">Other</h3>
                                    <div className="text-block-5 four">
                                        <strong className="bold-text-2">{t('four.other')}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="vertical-gray-line"></div>
                    </Fade>
                </div>
            </div>

            {/*!--------- Section Product ----------!*/}
            <div className="kiosk-section">
                <div className="headings-wrapper tabs">
                    <Fade bottom>
                        <div className="wrapper-2">
                            <h6 className="heading-3">Clean Design</h6>
                            <h3 className="heading-4 home">Crypto Currency ATM</h3>
                        </div>
                    </Fade>
                </div>
                <div className="kiosk-box">
                    <Fade left>
                        <div className="left-image-wrapper">
                            <img src={BtmLarge} srcSet={`${BtmSmall} 500w,${BtmLarge} 1428w`}
                                sizes="100vw" alt />
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="right-image-wrapper">
                            <img src={BtmLarge01} srcSet={`${BtmSmall01} 500w,${BtmLarge01} 1428w`}
                                sizes="100vw" alt />
                        </div>
                    </Fade>
                </div>
                <div className="container-3 home w-container">
                    <Fade bottom>
                        <h3 className="heading-5">
                            <b>Bitcoin ATM</b> ({t('bitcoin.1')})&nbsp;{t('bitcoin.2')}
                        </h3>
                    </Fade>
                </div>
            </div>

            <div className="black-section">
                <div className="black-image-wrapper">
                    <img
                        src={Large} srcSet={`${Small} 500w, ${Medium} 800w,${Large} 1801w`}
                        sizes="100vw" alt="" className="image-13" />
                </div>
                <div className="black-text-wrapper black">
                    <Fade bottom>
                        <div className="headings-wrapper">
                            <h6 className="heading-3 black">Our Product</h6>
                            <h3 className="heading-4 black">Smart Watch</h3>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="text-block-5 black home">
                            {t('watch')}
                        </div>
                    </Fade>
                </div>
            </div>

            <div className="section card">
                <div className="text-wrapper home">
                    <div className="headings-wrapper">
                        <h6 className="heading-3">Our Research</h6>
                        <h3 className="heading-4">Card</h3>
                    </div>
                    <div className="text-block-5 card">Coming Soon</div>
                </div>
            </div>

            {/* <Section1 maxWidth='xl'> */}
            {/* < section id='about-section' >
                    <div className='about-box'>
                        <div className='inner-about-box'>

                            <div className='about-post'>
                                <div className='about-post-content'>
                                    <a href='#ss'>
                                        <TrendingUpIcon />
                                    </a>
                                    <h2>FAST</h2>
                                    <p>Attractive product pricing for a faster return on investment allowing your company to scale faster.</p>
                                </div>
                                <div className='hover-about'>
                                    <h1>FAST</h1>
                                    <span></span>
                                    <p>Fast respond to customer question and complaint. We will make sure that our customer get a good service within time and solves problems for customer ASAP.</p>
                                </div>
                            </div>

                            <div className='about-post'>
                                <div className='about-post-content'>
                                    <a href='#ss'>
                                        <SettingsRoundedIcon />
                                    </a>
                                    <h2>24/7 Services</h2>
                                    <p>Attractive product pricing for a faster return on investment allowing your company to scale faster.</p>
                                </div>
                                <div className='hover-about'>
                                    <h1>24/7 Services</h1>
                                    <span></span>
                                    <p>
                                        Downtime costs money, our ATM's have the highest availability in the industry.
                                        <br />
                                        <br />
                                        Our software is classified by our customers as 'most stable' when compared to competing products.
                                        <br />
                                        <br />
                                        Over 99% of configuration tasks can be done from remote, saving operators on service visits.
                                    </p>
                                </div>
                            </div>
                            <div className='about-post'>
                                <div className='about-post-content'>
                                    <a href='#ss'>
                                        <SupervisorAccountRoundedIcon />
                                    </a>
                                    <h2>Support</h2>
                                    <p>Attractive product pricing for a faster return on investment allowing your company to scale faster.</p>
                                </div>
                                <div className='hover-about'>
                                    <h1>Support</h1>
                                    <span></span>
                                    <p>
                                        Our dedicated professional support staff is ready to help you via email, phone or skype call.
                                        <br />
                                        <br />
                                        Need help or training configuring your machine? We are happy to assist you using TeamViewer.
                                        <br />
                                        <br />
                                        The majority of feature ideas and improvements come from our ATM operators and we are happy to implement them.
                                    </p>
                                </div>
                            </div>

                            <div className='about-post'>
                                <div className='about-post-content'>
                                    <a href='#ss'>
                                        <ForumRoundedIcon />
                                    </a>
                                    <h2>OEM Service provider</h2>
                                    <p>Attractive product pricing for a faster return on investment allowing your company to scale faster.</p>
                                </div>
                                <div className='hover-about'>
                                    <h1>OEM</h1>
                                    <span></span>
                                    <p>
                                        We provide OEM services based on the product that customer request and rebranding as the customer own brand. In the OEM part we do have different kinds of products available.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ section > */}
            {/* </Section1> */}

            <div className="cryptomap-section">
                {/* <div className="image-text-wrapper home">
                        Cryptomap
                    </div> */}

                <div className="section Dark">

                </div>
                <div className="maps-section">
                    <div className="wrapper-maps col-center">
                        <div className="cryptomap-maps">
                            <Map
                                googleMapURL={mapURL}
                                containerElement={<div className="map-overview" />}
                                mapElement={<div style={{ height: '100%' }} />}
                                loadingElement={<p>Movex</p>}
                            />
                        </div>
                    </div>
                </div>
            </div>



            <div className="partnerships-section">
                <div className="content-wrapper home">
                    <h6 className="heading-2">A Partnerships</h6>
                    <h2 className="h2 partnerships">{t('partnership')}</h2>
                    <div className="logo-wrapper">
                        <h3 className="logo-partner">Logo</h3>
                        <h3 className="logo-partner">Logo</h3>
                        <h3 className="logo-partner">Logo</h3>
                        <h3 className="logo-partner">Logo</h3>
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    )
}
export default translate()(Home);
