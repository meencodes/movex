import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';

const particleOption = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 0.1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "retina_detect": true
}

const Blockchain = ({ t }) => {
  return (
    <div>
      <Header />

      <div className="blockchain-section">
        <Particles className="particles-js"
          params={particleOption}
        />
        <div className="text-wrapper-blockchain home">
          <h6 className="heading-2 white">Advanced Technology</h6>
          <Fade bottom>
            <h2 className="h2 convenience white">A Blockchain Solution</h2>
          </Fade>
          <h3 className="h3 home">Creation beyond imagination</h3>
        </div>
      </div>

      <div className="blockchain-second">
        
      </div>

      <Footer />

    </div>
  )
}

export default Blockchain;
