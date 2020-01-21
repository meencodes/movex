import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import VWatch from '../assets/video/Clock_MP4.mp4';
import Vwatch from '../assets/video/Clock_WebM.webm';

const Watch = ({ }) => {
    return (
        <div>
            <Header />
            <div className="cryptocurrency-hero-section white">
                <div className="cryptocurrency-hero-wrapper">
                    <div></div>
                    <div className="cryptocurrency-hero-content-wrapper">
                        <div className="hero-headings-wrapper">
                            <h4 className="little-heading black cryptocurrency">The innovative for life</h4>
                            <div className="big-heading-wrapper">

                                <h1 className="big-heading upper-hero">
                                    Smart Watch
                                    <br />
                                </h1>
                            </div>
                            <h2 className="medium-heading">
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
                        <h6 class="heading">Head</h6>
                        <h3 class="h2">Text</h3>
                    </div>
                </div>
                <div className="video-overlay"></div>
            </div>

            <Footer />
        </div>
    )
}

export default Watch
