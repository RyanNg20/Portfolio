import { useState } from 'react';
import { Background, Header, HeaderTitle, LeftBlock, RightWrapper, ScrollWrapper } from '../../components/Style';
import { ProjectWrapper, ProjectImage, Logo, ProjectContentWrapper, ProjectDescription, ProjectGradient } from './Style'
import { onWheel } from '../../components/ScrollFunctions';
import  project1 from '../../assets/images/project/1.png'
import  project2 from '../../assets/images/project/2.png'
import  project3 from '../../assets/images/project/3.png'
import Scoop from '../../assets/images/project/scoop.svg'
import Clipto from '../../assets/images/project/clipto.svg'
import Suitcase from '../../assets/images/project/suitcase.svg'

const Projects = () => {
  const [hover1, setHover1] = useState(false)
  const [hover2, setHover2] = useState(false)
  const [hover3, setHover3] = useState(false)
  const empty = [null, null, null]

  const onMouseOver = (fn: (arg0: boolean) => void) => fn(true)
  const onMouseLeave = (fn: (arg0: boolean) => void) => fn(false)
  
  return (
    <Background>
      <LeftBlock/>
      <RightWrapper>
        <Header>
          <HeaderTitle>
            Projects
          </HeaderTitle>
        </Header>
        <ScrollWrapper onWheel={onWheel}>
          {empty.map((_, index) => {
            const links = ['https://github.com/jacobjk01/scoop', 'https://clipto.io', 'https://jennyluvsfood.gumroad.com/l/OmXoR']
            const projects = [project1,project2,project3]
            const logos = [Scoop, Clipto, Suitcase]
            const alts = ['Scoop Logo', 'Clipto Logo', 'Suitcase Clinic Logo']
            const hovers = [hover1,hover2,hover3]
            const setHovers = [setHover1, setHover2, setHover3]
            const descriptions = [
              "Lead android developer among a team of 6 for a Javascript React Native mobile app that allows users to go on tours led by certified tour guides. App includes built-in google maps using Google Cloud Platform’s API keys and Firebase’s Firestore database.",
              "Front-end developer for Clipto: A WEB3 app allowing users to purchase NFT videos from their favorite creators, through cryptocurrency.",
              "Coauthor, set designer, and photographer of a 28-page full color cookbook whose proceedings went to  St. Jude's Childrens Hospital.",
            ]
            const colors = ['rgb(49,84,165)','rgb(237,230,65)','rgb(255,0,0)']
            const heights = ['50px', '50px', '100px']
            return (
              <ProjectWrapper
                onMouseOver={() => onMouseOver(setHovers[index])}
                onMouseLeave={() => onMouseLeave(setHovers[index])}
                hover={hovers[index]}
                href={links[index]}
                target="_blank"
                key={index}
              >
                <ProjectImage project={projects[index]} hover={hovers[index]}/>
                {/* <ProjectGradient hover={hovers[index]} color={colors[index]}/> */}
                <ProjectContentWrapper>
                  <Logo src={logos[index]} alt={alts[index]} hover={hovers[index]} height={heights[index]}/>
                  <ProjectDescription hover={hovers[index]}>
                    {descriptions[index]}
                  </ProjectDescription>
                </ProjectContentWrapper>
              </ProjectWrapper>
            )
          })}
        </ScrollWrapper>
      </RightWrapper>
    </Background>
  )
}

export default Projects