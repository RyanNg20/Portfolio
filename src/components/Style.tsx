import styled, { keyframes } from 'styled-components';
import { colors } from '../colors'

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: ${colors.purple};
`

export const LeftBlock = styled.div`
  height: 100vh;
  min-width: clamp(210px, 20%,300px);
`

export const RightWrapper = styled.div`
  height: 100vh;
  width: calc(100vw - clamp(210px, 20%,300px));
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
`
export const HeaderTitle = styled.h1`
  font-size: 32px;
  color: white;
  font-weight: 200;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 100px;
  display: flex;
`