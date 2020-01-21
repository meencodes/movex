import React, { Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

import Bounce from 'react-reveal/Bounce'

export class Card extends Component {
    render() {
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
}

export default Card
