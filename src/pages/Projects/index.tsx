import { useState } from 'react';
import { Background } from '../../components/Style';
import { Header, HeaderTitle, LeftBlock, RightWrapper, BodyWrapper, ProjectWrapper, ProjectImage, Logo, ProjectContentWrapper, ProjectDescription, ProjectGradient } from './Style'
import  project1 from '../../assets/images/project1.png'
import  project2 from '../../assets/images/project2.png'
import  project3 from '../../assets/images/project3.png'
import Scoop from '../../assets/images/scoop.svg'
import Clipto from '../../assets/images/clipto.svg'
import Suitcase from '../../assets/images/suitcase.svg'

const Projects = () => {
  const [hover1, setHover1] = useState(false)
  const [hover2, setHover2] = useState(false)
  const [hover3, setHover3] = useState(false)
  const empty = [null, null, null]

  const onWheel = (e:any) => e.currentTarget.scrollLeft += e.deltaY
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
        <BodyWrapper onWheel={onWheel}>
          {empty.map((_, index) => {
            const links = ['https://github.com/jacobjk01/scoop', 'https://clipto.io', 'https://jennyluvsfood.gumroad.com/l/OmXoR']
            const projects = [project1,project2,project3]
            const logos = [Scoop, Clipto, Suitcase]
            const alts = ['Scoop Logo', 'Clipto Logo', 'Suitcase Clinic Logo']
            const hovers = [hover1,hover2,hover3]
            const setHovers = [setHover1, setHover2, setHover3]
            const descriptions = [
              "Lead android developer among a team of 6 for a Javascript React Native mobile app that allows users to go on tours led by certified tour guides. App includes built-in google maps using Google Cloud Platform’s API keys and Firebase’s Firestore database.Additionally, Figma was used to design the app, and Notion was used to keep track of progress.",
              "Front-end developer for Clipto: A web3 app allowing users to purchase NFT videos from their favorite creators.",
              "Coauthor, set designer, and photographer of a 28-page full color cookbook whose proceedings went to  St. Jude's Childrens Hospital.",
            ]
            const colors = ['rgb(49,84,165)','rgb(237,230,65)','rgb(255,0,0)']
            const heights = ['50px', '60px', '100px']
            return (
              <ProjectWrapper onMouseOver={() => onMouseOver(setHovers[index])} onMouseLeave={() => onMouseLeave(setHovers[index])} hover={hovers[index]} href={links[index]} target="_blank">
                <ProjectImage project={projects[index]} hover={hovers[index]}/>
                <ProjectGradient hover={hovers[index]} color={colors[index]}/>
                <ProjectContentWrapper>
                  <Logo src={logos[index]} alt={alts[index]} hover={hovers[index]} height={heights[index]}/>
                  <ProjectDescription hover={hovers[index]}>
                    {descriptions[index]}
                  </ProjectDescription>
                </ProjectContentWrapper>
              </ProjectWrapper>
            )
          })}
        </BodyWrapper>
      </RightWrapper>
    </Background>
  )
}

export default Projects