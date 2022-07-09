import {useEffect, useState } from 'react';
import { ContactsWrapper, ContactWrapper, StyledDiscord, StyledGmail, StyledGithub, StyledInstagram, StyledLinkedin, StyledTwitter, AboutWrapper, Clipboard, ContactClipboardWrapper } from './Style';
import { Background, Header, HeaderTitle, LeftBlock, RightWrapper, H4Text } from '../../components/Style';


const About = () => {
  const icons = [StyledLinkedin, StyledGithub, StyledDiscord, StyledGmail, StyledInstagram, StyledTwitter]
  const iconTexts = ["","","Taku#0605","ropher20@gmail.com","@ferreroropher","@FerreroRopher"]
  const links = ["https://www.linkedin.com/in/ropher20/", "https://github.com/RyanNg20", undefined, undefined, "https://www.instagram.com/ferreroropher/", "https://twitter.com/FerreroRopher"]
  const [showClipboard1, setShowClipboard1] = useState(false)
  const [showClipboard2, setShowClipboard2] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShowClipboard1(false)
      setShowClipboard2(false)
    }, 1000)
  }, [showClipboard1, showClipboard2])
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
                <Clipboard index={index} clipboard1={showClipboard1} clipboard2={showClipboard2}>Copied to Clipboard</Clipboard>
                <ContactWrapper index={index} href={links[index]} target="_blank" rel="noreferrer" key={index}
                  onClick={() => {
                    if (index == 2 || index == 3) {
                      navigator.clipboard.writeText(iconTexts[index])
                      if (index == 2)
                        setShowClipboard1(true)
                      else if (index == 3)
                        setShowClipboard2(true)
                    }
                  }}
                >
                  <Icon/>
                  {iconTexts[index]}
                </ContactWrapper>
              </ContactClipboardWrapper>
            )
          })}

        </ContactsWrapper>
      </RightWrapper>
    </Background>
  )
}

export default About