import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import banner from '../assets/images/architectural-design-architecture-buildings-city-374811.jpg'

import { Typography, Container } from '@material-ui/core'
import arrow from '../assets/images/tooltip/arrow_down.svg'

import TrendingUpIcon from '@material-ui/icons/TrendingUpRounded';
import SupervisorAccountRoundedIcon from '@material-ui/icons/SupervisorAccountRounded';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';

import '../App.css'

const Section = styled(Container)`
&& {
    background-color: white;
}
`
const Section1 = styled(Container)`
    && {
        background-color: rgba(248,248,248,1);
        min-height: 100px;
    }
`
const TrendingUp = styled(TrendingUpIcon)`
    font-size: 10rem;
`

export class Home extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
        }
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    render() {
        return (
            <div id='top'>
                <Header />

                <Info1>
                    <Session1>
                        <InfoImg1>
                            <BgImage src={banner} alt="saron" sizes="180vh" />
                        </InfoImg1>
                    </Session1>

                    <Session2>
                        <Message>
                            —<br />MoveX,<br />HashBx Global.<br />
                        </Message>
                        <a href="#about-section" className="action">
                            <span className="action_icon">
                                <img src={arrow} style={{ width: '23px', height: '23px' }} alt="action" />
                            </span>
                            <span className="action_message">Contents</span>
                        </a>
                    </Session2>
                </Info1>



                <Section maxWidth='xl' id='click'>
                    <Typography component="div" style={{ minHeight: '100px', padding: '5vh', textAlign: 'center', fontFamily: 'Sukhumvit' }}>
                        Content No.1
                    </Typography>
                </Section>

                {/* <Section1 maxWidth='xl'> */}
                <div id='about-section'>
                    <div className='about-box'>
                        <div className='inner-about-box'>

                            <div className='about-post'>
                                <div className='about-post-content'>
                                    <a href>
                                        <TrendingUp />
                                    </a>
                                    <h2>FAST ROI</h2>
                                    <p>Attractive product pricing for a faster return on investment allowing your company to scale faster.</p>
                                </div>
                                <div className='hover-about'>
                                    <h1>FAST ROI</h1>
                                    <span></span>
                                    <p>Fast respond to customer question and complaint. We will make sure that our customer get a good service within time and solves problems for customer ASAP.</p>
                                </div>
                            </div>

                            <div className='about-post'>
                                <div className='about-post-content'>
                                    <a href>
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
                                    <a href>
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
                                    <a href>
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
                </div>
                {/* </Section1> */}

                <Container id='Container'>
                    <Typography component="div" style={{ backgroundColor: 'black', minHeight: '100px', padding: '5vh', textAlign: 'center', color: 'white', fontFamily: 'Sukhumvit' }}>
                        Content No. 3
                    </Typography>
                </Container>
                <br />


                <Footer />
            </div>
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
              line-height: .85;
              margin-bottom: 1rem;
              color: white;
            `
