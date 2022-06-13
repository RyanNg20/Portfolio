import {useEffect, useState } from 'react';
import { ContactsWrapper, ContactWrapper, StyledDiscord, StyledGmail, StyledGithub, StyledInstagram, StyledLinkedin, StyledTwitter, AboutWrapper } from './Style';
import { Background, Header, HeaderTitle, LeftBlock, RightWrapper, } from '../../components/Style';


const About = () => {
  const icons = [StyledLinkedin, StyledGithub, StyledDiscord, StyledGmail, StyledInstagram, StyledTwitter]
  const iconTexts = ["","","Taku#0605","ropher20@gmail.com","@ferreroropher","@FerreroRopher"]
  const links = ["https://www.linkedin.com/in/ropher20/", "https://github.com/RyanNg20", undefined, undefined, "https://www.instagram.com/ferreroropher/", "https://twitter.com/FerreroRopher"]
  return (
    <Background>
      <LeftBlock/>
      <RightWrapper>
        <Header>
          <HeaderTitle>
            About
          </HeaderTitle>
        </Header>
        <AboutWrapper/>
        <ContactsWrapper>
          {icons.map((Icon, index) => {
            return (
              <ContactWrapper index={index} href={links[index]} target="_blank" rel="noreferrer" key={index}>
                <Icon/>
                {iconTexts[index]}
              </ContactWrapper>
            )
          })}
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

        </ContactsWrapper>
      </RightWrapper>
    </Background>
  )
}

export default About