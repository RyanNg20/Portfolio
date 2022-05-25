import styled, { keyframes } from 'styled-components';
import side from '../assets/images/side.png'
import { colors } from '../colors'

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: ${colors.purple};
`
export const RightBackground = styled.div`
  height: 100vw;
`
interface SideWrapperProps {
  position: number[]
}
export const SideWrapper = styled.div<SideWrapperProps>`
  background-image: url(${side});
  background-size: cover;
  position: fixed;
  transition: opacity 1s;
  opacity: ${(props) => props.position[0] === -2 && props.position[1] === -1?0:0.3};
  height: 100vh;
  width: 300px;
  z-index: 100;
  box-shadow: 10px 5px 8px rgba(0,0,0,0.8);
`