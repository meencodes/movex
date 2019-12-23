import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

export class AtmBit extends Component {
    render() {
        return (
            <Main>
                <Header />
                <Content_sub>
                    55
                </Content_sub>
                <Footer />
            </Main>
        )
    }
}

const Main = styled.div`
    margin: 0 auto;
`
const Content_sub = styled.div`
    margin-top: 128px;
    margin-bottom: 60px;
`
const Contain = styled.div`
    padding-right:15px;
    padding-left:15px;
    margin-right:auto;
    margin-left:auto;
`

export default AtmBit
