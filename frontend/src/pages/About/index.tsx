import {useEffect, useState } from 'react';
import { ContactsWrapper, ContactWrapper, StyledDiscord, StyledGmail, StyledGithub, StyledInstagram, StyledLinkedin, StyledTwitter, AboutWrapper, Clipboard, ContactClipboardWrapper } from './Style';
import { Background, Header, HeaderTitle, LeftBlock, RightWrapper, H4Text } from '../../components/Style';


const About = () => {
  const icons = [StyledLinkedin, StyledGithub, StyledDiscord, StyledGmail, StyledInstagram, StyledTwitter]
  const iconTexts = ["","","Taku#0605","ropher20@gmail.com","@ferreroropher","@FerreroRopher"]
  const links = ["https://www.linkedin.com/in/ropher20/", "https://github.com/RyanNg20", undefined, undefined, "https://www.instagram.com/ferreroropher/", "https://twitter.com/FerreroRopher"]
  const [showClipboard, setShowClipboard] = useState([false, false])
  console.log(showClipboard)
  return (
    <Background>
      <LeftBlock/>
      <RightWrapper>
        <Header>
          <HeaderTitle>
            About
          </HeaderTitle>
        </Header>
        <AboutWrapper>
          <H4Text>
            Hi my names Ryan! I am the designer, coder, and artist of this website. I initially wanted to make this website so I could put it on my resume,
            but it has transformed into a passion project that would allow people to commision art from me, showcase my talents to friends and future recruiters,
            and build something that I could be proud of. I wanted to create this website with motifs of my favorite things: anime, games, and cute animals,
            however it seemed daunting trying to fit all of this in without any design experience. I ended up going with a sort of constellation themed website,
            with some inspiration from video games (the arrow keys for navigation).
          </H4Text>
        </AboutWrapper>
        <ContactsWrapper>
          {icons.map((Icon, index) => {
            return (
              <ContactClipboardWrapper>
                {((index == 2 || index == 3) && showClipboard[index]) &&
                  <Clipboard>Copy to Clipboard</Clipboard>
                }
                <ContactWrapper index={index} href={links[index]} target="_blank" rel="noreferrer" key={index}
                  onClick={() => {
                    if (index == 2 || index == 3) {
                      navigator.clipboard.writeText(iconTexts[index])
                    }
                  }}
                  onMouseEnter={() => {
                    let temp = showClipboard
                    temp[index - 2] = true
                    setShowClipboard(temp)
                    console.log('hi')
                  }}
                  onMouseLeave={() => {
                    let temp = showClipboard
                    temp[index - 2] = false
                    setShowClipboard(temp)
                  }}
                >
                  <Icon/>
                  {iconTexts[index]}
                </ContactWrapper>
              </ContactClipboardWrapper>
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