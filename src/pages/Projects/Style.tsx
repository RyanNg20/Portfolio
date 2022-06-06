import styled from 'styled-components';
import { colors } from '../../colors'

export const BodyWrapper = styled.div`
  flex-grow: 1;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 80px;
  background-color: rgba(0,0,0,0.2);
  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.5);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0,0,0,0.5);
    border-radius: 3px;
  }
`
interface HoverProps {
  hover: boolean,
}
export const ProjectWrapper = styled.a<HoverProps>`
  display: inline-block;
  vertical-align: top;
  width: 820px;
  height: 500px;
  transform: ${(props) => props.hover?'scale(1.07)':'scale(1)'};
  transition: transform 0.5s;
  margin-left: 20px;
  margin-right: 20px;
  position: relative;
`
interface ProjectImageProps{
  project: string,
  hover: boolean,
}
export const ProjectImage = styled.div<ProjectImageProps>`
  background-image: url(${(props) => props.project});
  width: 820px;
  height: 500px;
  position: absolute;
  background-size: cover;
  border-radius: 20px;
  opacity: ${(props) => props.hover?0.2:0.5};
  transition: opacity 0.5s;
`
interface ProjectGradientProps {
  hover: boolean,
  color: string,
}
export const ProjectGradient = styled.div<ProjectGradientProps>`
  background-image: linear-gradient(rgba(0,0,0,0), ${(props) => props.color});
  width: 820px;
  height: 500px;
  position: absolute;
  background-size: cover;
  border-radius: 20px;
  opacity: ${(props) => props.hover?0.3:0};
  transition: opacity 0.5s;
  z-index: 50;
`
export const ProjectContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  pointer-events: none;
`
interface LogoProps {
  hover: boolean,
  height: string,
}
export const Logo = styled.img<LogoProps>`
  height: ${(props) => props.height};
  z-index: 100;
  position: relative;
  transform: ${(props) => props.hover?`translateY(-130px)`:`translateY(0px)`}};
  transition: transform 0.5s;
`
export const ProjectDescription = styled.p<HoverProps>`
  font-size: 20px;
  font-weight: 100;
  z-index: 100;
  white-space: normal;
  width: 80%;
  transition: opacity 0.5s;
  opacity: ${(props) => props.hover?1:0};
  position: absolute;
  line-height: 30px;
  color: white;
`