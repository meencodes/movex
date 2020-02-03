import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Particles from 'react-particles-js';
import { Fade, Bounce } from 'react-reveal';

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
  useEffect(() => {
    window.scrollTo(0, 0);
  })
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

      <div className="blockchain-second"></div>

      <div className="hero-section-wrapper coin">
        <div className="coin-hero-content-wrapper">

          <div className="text-feature-wrapper cryptocurrency">
            <div className="headings-wrapper">
              <h6 className="heading-3">Advanced Technology</h6>
              <Fade bottom>
                <h3 className="heading-4 maintenace">Coin implementation</h3>
              </Fade>
            </div>
            <div className="text-block-5 card"></div>
          </div>

          {/* Phase 1 */}
          <div className="text-wrapper coin _2">
            <div className="headings-wrapper phase">
              <h6 className="heading-3">Coin implementation</h6>
              <Bounce left>
                <h3 className="heading-4 heat-delivery _1">Phase 1</h3>
              </Bounce>
            </div>
            <Fade bottom>
              <div className="text-block-5 coin">Put up the project of the coin, set up a team, work orientation, write White Paper, <br /><br />
                Whitepaper : A document that is like a communication tool from the project owner. Or one technology to users or readers In order to gain more understanding in the project and also exposing concepts and working in depth Details that should have in White paper.<br /><br />
                1. The purpose of the coin: the origin of the project, the project overview etc.<br />
                2. Coin Road Map: Working guidelines, current plans and that will happen in the future<br />
                3. Project team or partner: Participants in the project
            </div>
            </Fade>
          </div>

          {/* Phase 2 */}
          <div className="text-wrapper coin _2">
            <div className="headings-wrapper phase">
              <h6 className="heading-3">Coin implementation</h6>
              <Bounce left>
                <h3 className="heading-4 heat-delivery _1">Phase 2</h3>
              </Bounce>
            </div>
            <Fade bottom>
              <div className="text-block-5 coin">Create Website, Write github, Write source code, Contact explorer.<br /><br />
                2.1) &nbsp; Create a website : so that those interested can go to read more information on the website. There will be all details about the project, location, contact methods<br /><br />
                2.2) &nbsp; Upload project data to Github: Github is a hosting service for storing version control using Git. Most of the source code is stored. ) But still retain the original qualities of the kit Such as distributed version control and source code management systems, including the addition of other features, such as access control and collaboration features such as Bug tracking, feature requests, task management, and wikis for every project<br />
                Github was created to clarify the work from the beginning of the project. If the project is public, you can check it on Github. On the Exchange forums, Github is also asked to consider.<br /><br />

                2.3) &nbsp; Writing ERC20 (source code) is writing Currency comes in the form of Smart Contract on Ethereum. Information is stored in decentralized database, so everyone can verify, cannot be forgotten And most importantly, we can exchange to other currencies that use the ERC 20 standard.
              <br /><br />
                <b>ERC20 Token Standar</b><br />
                The standard in terms of solidity is Smart Contract. We have to have the function as specified, with 6 functions and 2 events as follows.<br />

                contract ERC20Interface &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function totalSupply () public constant returns (uint);<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function balanceOf (address tokenOwner) public constant returns (uint balance);<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function allowance (address tokenOwner, address spender) public constant returns (uint remaining);<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function transfer (address to, uint tokens) public returns (bool success);<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function approve (address spender, uint tokens) public returns (bool success);<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function transferFrom (address from, address to, uint tokens) public returns (bool success); event Transfer (address indexed from, address indexed to, uint tokens);<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;event Approval (address indexed tokenOwner, address indexed spender, uint tokens);<br />
                &#125;
              <br /><br />
                2.4) &nbsp; Create an Explorer: Publicize the project on the website about Cryptocurrency abroad, people all over the world interested in Cryptocurrency Will come in to find new coins with potential and to fill out information to bring coins to the Exchange board in foreign countries, there should be enough publicity information for coins to be exchanged. Potential Exchange boards will consider taking coins to put on the board.
            </div>
            </Fade>
          </div>

          {/* Phase 3 */}
          <div className="text-wrapper coin _2">
            <div className="headings-wrapper phase">
              <h6 className="heading-3">Coin implementation</h6>
              <Bounce left>
                <h3 className="heading-4 heat-delivery _1">Phase 3</h3>
              </Bounce>
            </div>
            <Fade bottom>
              <div className="text-block-5 coin">Marketing social online and promoting the project<br /><br />
                To promote the project to those interested it is necessary to use online media to help publicize. Because will be able to reach directly to interested groups and targeted.<br /><br />
                Facebook : Create a page of the project to notify the interested person. And participate in the Fan page. The number of members on Facebook will be information indicating the interest of the project to the target group.
              <br />
                Line @ : to allow members to talk, report information and problems with the staff directly<br />
                Telegram : This is another way to contact people who are interested. Especially foreigners will use this channel because it's convenient. And easy to reach<br />
                Instagram : To inform the progress of the project to those who are interested in all channels. Instagram is a very popular online channel.<br />
                YouTube : Creating a presentation in video clips Explain about the project easily to understand. And does not take long to provide diversity in public relations for those interested.<br /><br />
                And other online media that has received attention.
            </div>
            </Fade>
          </div>

          {/* Phase 4 */}
          <div className="text-wrapper coin _2">
            <div className="headings-wrapper phase">
              <h6 className="heading-3">Coin implementation</h6>
              <Bounce left>
                <h3 className="heading-4 heat-delivery _1">Phase 4</h3>
              </Bounce>
            </div>
            <Fade bottom>
              <div className="text-block-5 coin">List up foreign exchange boards, join Coinmarketcap<br /><br />
                There are procedures and fees for contacting foreign exchange boards. Which is different in each exchange<br /><br />
                Coinmarketcap : Not an exchange board. But is one of the most recognized international websites Which collects information about currencies Cryptocurrency, whether it is a matter of market overview And the price of each currency Currencies that can be listed on That means that Coinmarketcap The currency coin has already passed the standards of the website itself, such as Bitcoin, Ethereum, XRP, Bitcoincash, Happycoin, etc. and the coin that is listed on Coinmarketcap is creating credibility for investors in the money market. Cryptocurrency Very much.
              </div>
            </Fade>
          </div>

        </div>
      </div>

      {/* <div className="section-4 blockchain-section-wrapper">
        <div className="black-wrapper">
          <div className="right-black-scroll">

            
            <div className="hero-content-wrapper phase">
              <div className="column left phase schedule">
                <div className="black-text-wrapper black phase">
                  <div className="headings-wrapper">
                    <h6 className="heading-3 black phase">ADVANCED TECHNOLOGY</h6>
                    <h3 className="heading-4 black phase"><strong>Phase 1</strong></h3>
                  </div>
                  <div class="text-block-5 black">Put up the project of the coin, set up a team, work orientation, write White Paper<br /></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div> */}

      <Footer />

    </div>
  )
}

export default Blockchain;
