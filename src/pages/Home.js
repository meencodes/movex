import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
// import Test from '../components/test'
import Footer from '../components/Footer'
import banner from '../assets/images/architectural-design-architecture-buildings-city-374811.jpg'
import bgBtm from '../assets/images/btm/btm.jpg'

import { Typography, Container } from '@material-ui/core'
import arrow from '../assets/images/tooltip/arrow_down.svg'

import TrendingUpIcon from '@material-ui/icons/TrendingUpRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';

import '../style.css';
import '../bootstrap-touch-slider.css';

// import bg from '../assets/images/container.png';
import { Link } from 'react-scroll';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }
    
    render() {
        return (
            <div id='main'>
                {/* <Test /> */}
                <Header />

                <div id="bootstrap-touch-slider" class="carousel bs-slider fade  control-round indicators-line" data-ride="carousel" data-pause="hover" data-interval="5000" >


                    <ol class="carousel-indicators">
                        <li data-target="#bootstrap-touch-slider" data-slide-to="0" class="active"></li>
                        <li data-target="#bootstrap-touch-slider" data-slide-to="1"></li>
                    </ol>


                    <div class="carousel-inner" role="listbox">


                        <div class="item active slide_1">


                            <div class="bs-slider-overlay"></div>

                            <div class="container">
                                <div class="row">
                                    <div class="slide-text slide_style_left kanit">
                                        <h1 data-animation="animated fadeInRight">เปิดบริการแล้ววันนี้</h1>
                                        <h2 data-animation="animated fadeInLeft">ที่ สยามพารากอน ชั้น GA (NORTH)</h2>
                                        <br />
                                    </div>
                                </div>
                            </div>
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
                                        <h1 data-animation="animated fadeInRight">Open Now!</h1>
                                        <h2 data-animation="animated fadeInLeft">At HashBx Global</h2>
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

                {/* <Info1>
                    <Session1>
                        <InfoImg1>
                            <BgImage src={banner} alt="saron" sizes="180vh" />
                        </InfoImg1>
                    </Session1>

                    <Session2>
                        <Message>
                            —<br />MoveX,<br />HashBx Global.<br />
                        </Message>
                        <Link
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
                        </Link>
                    </Session2>
                </Info1> */}
                <Section2 id="">
                    <img src={bgBtm} alt='' style={{backgroundSize: 'cover', width: '100vw'}}/>
                </Section2>


                {/*!--------- Section Product ----------!*/}

                {/* <SectionProduct maxWidth='none' id='click'>
                    <Typography style={{ padding: '8vh', fontFamily: 'Sukhumvit', textAlign: 'center', fontSize: '4vmin' }}>Our Products</Typography>
                    <ProductLayout component="div">

                        <Link to='/atmbitcoin' style={{ textDecoration: 'none', color: 'rgb(17, 17, 17)' }}>
                            <Grid container style={{ backgroundColor: '#E2E2E2' }}>
                                <GridLayout item xs={12} sm={6}>
                                    <img src={btm} alt='' style={{ width: '400px', height: '400px' }} />
                                </GridLayout>
                                <GridLayout item xs={12} sm={6}>
                                    <p style={{ padding: '8vw' }}><h1>Kiosk BTM</h1>A Bitcoin ATM (Automated Teller Machine) is a kiosk that allows a person to purchase Bitcoin through QR Code on the application.Some Bitcoin ATMs offer bi-directional functionality enabling both the purchase of Bitcoin as well as the sale of Bitcoin for cash.
                                </p>
                                </GridLayout>
                            </Grid>
                        </Link>

                    </ProductLayout>
                    <br />
                    <ProductLayout component="div">
                        <Link to='/watch' style={{ color: '#fff' }}>
                            <Grid container style={{ backgroundColor: '#E0382D' }}>
                                <GridLayout item xs={12} sm={6}>
                                    <p style={{ padding: '8vw' }}><h2>Smart Watch</h2>The innovative for life Ultimate moves with MoveX the innovative online 4G ledger which provide a unique style of life. Move with passion Move with MoveX.
                                    Company ready all the gadgets with the titanium and the diameter of 48 mm. This MoveX watch can easily pair with all sharing gadgets. Multiple device functions are present in this product.
                                </p>
                                </GridLayout>
                                <GridLayout item xs={12} sm={6}>
                                    <img src={watch} alt='' style={{ width: '400px', height: '400px' }} />
                                </GridLayout>
                            </Grid>
                        </Link>
                    </ProductLayout>
                    <br />
                    <ProductLayout>
                        <Grid container style={{ backgroundColor: 'orange' }}>
                            <GridLayout item xs={12} sm={6}>
                                <img src={card} alt='' style={{ width: '400px', height: '400px' }} />
                            </GridLayout>
                            <GridLayout item xs={12} sm={6}>
                                <p style={{ padding: '8vw' }}><h2>Card</h2>
                                    Coming Soon
                                </p>
                            </GridLayout>
                        </Grid>
                    </ProductLayout>
                    <br />
                    <ProductLayout>

                        <Grid container style={{ backgroundColor: 'yellow' }}>
                            <GridLayout item xs={12} sm={6}>
                                <p style={{ padding: '8vw' }}><h2>Cryptomap</h2>
                                    Search for shops, cafes, accommodations, tourist attractions accept payments with Crypto currencies.
                                </p>
                            </GridLayout>
                            <GridLayout item xs={12} sm={6}>
                                <img src={cryptomap} alt='' style={{ width: '400px', height: '400px' }} />
                            </GridLayout>
                        </Grid>
                    </ProductLayout>
                    <br />
                    <ProductLayout>
                        <Grid container style={{ background: 'blue' }}>
                            <GridLayout item xs={12} sm={6}>
                                <img src={blockchain} alt='' style={{ width: '400px', height: '400px' }} />
                            </GridLayout>
                            <GridLayout item xs={12} sm={6}>

                                <Typography>
                                    Blockchain
                                </Typography>
                            </GridLayout>
                        </Grid>
                    </ProductLayout>
                </SectionProduct > */}

                {/* <Section1 maxWidth='xl'> */}
                < section id='about-section' >
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
                </ section >
                {/* </Section1> */}

                < Container id='Container' >
                    <Typography component="div" style={{ backgroundColor: '#ffffff', minHeight: '100px', padding: '5vh', textAlign: 'center', color: 'white', fontFamily: 'Sukhumvit' }}>
                        Content No. 3
                    </Typography>
                </Container >
                <br />


                <Footer />
            </div >
        )
    }
}

export default Home

const Info1 = styled.div`
                          height: 100vh;
                          overflow: hidden;
                          position: relative;
                        `
const Session1 = styled.div`
                          top: 0;
                          left: 0;
                          width: 100vw;
                          bottom: 0;
                          overflow: hidden;
                          position: absolute;
                        `
const InfoImg1 = styled.div`
                          top: 0;
                          left: 0;
                          right: 0;
                          bottom: 0;
                          z-index: 0;
                          overflow: hidden;
                          position: absolute;
                        `
const BgImage = styled.img`
                          top: 0;
                          right: 0;
                          width: 100vw;
                          height: 100%;
                          z-index: 0;
                          position: absolute;
                          object-fit: cover;
                          /* filter: blur(2px); */
                          filter: brightness(70%);
                        `

/* ----- Session Arrow ----------*/

const Session2 = styled.div`
                          left: 5vw;
                          bottom: 5vh;
                          position: absolute;
                        `
const Message = styled.div`
                          font-size: 8vmin;
                          line-height: 0.85;
                          margin-bottom: 1rem;
                          color: white;
                          letter-spacing: 0.1em;
                        `

/*!--------- Section Product ----------!*/

const Section2 = styled.div`
                
                overflow: hidden;
                position: relative;
                filter: brightness(90%);
`