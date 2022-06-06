import {useEffect, useState } from 'react';
import { ContactWrapper } from './Style';
import { Background, Header, HeaderTitle, LeftBlock, RightWrapper, } from '../../components/Style';


const About = () => {

  return (
    <Background>
      <LeftBlock/>
      <RightWrapper>
        <Header>
          <HeaderTitle>
            About
          </HeaderTitle>
        </Header>
        <ContactWrapper>
          {/* <div className='contact'>
            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer" className='link'>
              Twitter
            </a>
            &nbsp;|&nbsp;
            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer" className='link'>
              Github
            </a>
            &nbsp;|&nbsp;
            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer" className='link'>
              LinkedIn
            </a>
            &nbsp;|&nbsp;
            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer" className='link'>
              Resume
            </a>
          </div> */}

        </ContactWrapper>
      </RightWrapper>
    </Background>
  )
}

export default About