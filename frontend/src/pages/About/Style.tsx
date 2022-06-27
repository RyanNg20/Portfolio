import styled from 'styled-components';
import { colors } from '../../colors'
import {ReactComponent as Discord} from '../../assets/images/contact/discord.svg'
import {ReactComponent as Github} from '../../assets/images/contact/github.svg'
import {ReactComponent as Gmail} from '../../assets/images/contact/gmail.svg'
import {ReactComponent as Instagram} from '../../assets/images/contact/instagram.svg'
import {ReactComponent as Linkedin} from '../../assets/images/contact/linkedin.svg'
import {ReactComponent as Twitter} from '../../assets/images/contact/twitter.svg'


export const ContactsWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 5%;
  padding-right: 5%;
  flex-wrap: wrap;
  margin-bottom: 50px;
`
interface ContactWrapperProps {
  index: number,
}
export const ContactWrapper = styled.a<ContactWrapperProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.5);
  font-size: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 25px;
  padding-left: 25px;
  margin: 10px;
  color: white;
  text-decoration: none;
  transition: background-color 0.5s, color 0.5s;
  ${(props) => props.index != 2 && props.index != 3?`
    &:hover{
      background-color: ${colors.orange};
      color: black;
    }
  `:''}
`

const IconStyling = `
  height: 50px;
  width: 50px;
`
export const StyledLinkedin = styled(Linkedin)`${IconStyling}`
export const StyledGithub = styled(Github)`${IconStyling}`
export const StyledGmail = styled(Gmail)`${IconStyling} margin-right: 15px;`
export const StyledDiscord = styled(Discord)`${IconStyling} margin-right: 15px;`
export const StyledInstagram = styled(Instagram)`${IconStyling} margin-right: 15px;`
export const StyledTwitter = styled(Twitter)`${IconStyling} margin-right: 15px;`

export const AboutWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
`