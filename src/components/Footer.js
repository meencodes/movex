import React, { Component } from 'react';
import Styled from 'styled-components';

class Footer extends Component {
    render() {
        return (
            <PageFooter>
                <Contact>
                    <ContactMenu>
                        <ContactRow>
                           
                            55555
                        </ContactRow>
                    </ContactMenu>
                </Contact>
                <Copyright>
                    <ContactMenu>
                        <p>Copyright © 2019 HashBx Global Co.,Ltd All Rights Reserved.</p>
                    </ContactMenu>
                </Copyright>
            </PageFooter>
        )
    }
}

export default Footer;

const PageFooter = Styled.div`
  width: 100%;
  min-height: 100px;
  background: rgba(0,0,0,0.8);
  bottom: 0;
  left: 0;
  right: 0;
`
const Copyright = Styled.div`
    overflow: hidden;
    font-size: 14px;
    color: rgb(214,214,214);
    display: flex;
`
const Contact = Styled.div`
    width: 100%;
    border-bottom: 1px #616161 solid;
`
const ContactMenu = Styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-left: auto;
    margin-right: auto;
`
const ContactRow = Styled.div`
    margin-right: -15px;
    margin-left: -15px;
`