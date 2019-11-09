import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import banner from '../assets/images/architectural-design-architecture-buildings-city-374811.jpg'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';

export class Home extends Component {
    render() {
        return (
            <div>
                <Header />

                <Info1>
                    <Session1>
                        <InfoImg1>
                            <BgImage src={banner} alt="saron" sizes="180vh" />

                        </InfoImg1>
                    </Session1>
                </Info1>

                <Container fixed>
                    555
                    {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
                </Container>
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

const Content = styled.div`
    position: relative;
    text-align: center;
`
const ContentI = styled.div`
    width: 100%;
    background: rgb(109,6,8,9);
`
