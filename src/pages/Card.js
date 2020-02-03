import React, { useEffect } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

import Bounce from 'react-reveal/Bounce'

const Card = ({ t }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div>
            <Header />
            <div className="section">
                <div className="coming-soon">
                    <Bounce>
                        <h2>Coming Soon !!</h2>
                    </Bounce>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Card
