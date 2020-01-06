import React, { Component } from 'react';
import styled from 'styled-components';

class NotFound extends Component {
    render() {
        return (
            <Container>
                <Con>
                    <h1>404 NotFound</h1>
                </Con>
            </Container>
        )
    }
}

const Container = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
`
const Con = styled.div`
    width: 25vw;
    display: flex;
    align-items: center;
`

export default NotFound;