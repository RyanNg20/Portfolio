import styled from 'styled-components';
import { colors } from '../../colors'
import {ReactComponent as Discord} from '../../assets/images/contact/discord.svg'
import {ReactComponent as Github} from '../../assets/images/contact/github.svg'
import {ReactComponent as Gmail} from '../../assets/images/contact/gmail.svg'
import {ReactComponent as Instagram} from '../../assets/images/contact/instagram.svg'
import {ReactComponent as Linkedin} from '../../assets/images/contact/linkedin.svg'
import {ReactComponent as Twitter} from '../../assets/images/contact/twitter.svg'


export const ContactsWrapper = styled.div`
  width: calc(100% - 200px);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 100px;
  padding-right: 100px;
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
  font-size: 18px;
  padding: 10px 20px;
  margin: 5px;
  color: white;
  text-decoration: none;
  border-radius: 15px;
  transition: background-color 0.5s;
  &:hover{
    background-color: ${colors.orange};
  }
`
export const ContactClipboardWrapper = styled.div`
  display: flex;
  flex-direction: column;

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
  width: calc(100% - 200px);
  flex-grow: 1;
  padding: 0px 100px;
`
interface ClipboardProps {
  index: number,
  clipboard1: boolean,
  clipboard2: boolean,
}
export const Clipboard = styled.div<ClipboardProps>`
  background-color: rgba(60,60,60,1);
  position: absolute;
  transform: translateY(-40px);
  margin-left: 10px;
  padding: 8px 15px;
  border-radius: 10px;
  transition: display 1s;
  ${(props) => (props.index==2 && props.clipboard1) || (props.index==3 && props.clipboard2)?`display: initial`: 'display: none'}
`