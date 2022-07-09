import styled, { keyframes } from 'styled-components';
import { colors } from '../colors'

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: ${colors.purple};
  overflow: hidden;
`
export const ScrollWrapper = styled.div`
  flex-grow: 1;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding-left: 80px;
  padding-right: 80px;
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
export const LeftBlock = styled.div`
  height: 100vh;
  min-width: clamp(210px, 20%,300px);
`

export const RightWrapper = styled.div`
  height: 100vh;
  width: calc(100vw - clamp(210px, 20%,300px));
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Header = styled.div`
  width: 100%;
  height: 180px;
  min-height: 100px;
  display: flex;
  margin-left: 100px;
  
`
export const HeaderTitle = styled.h1`
  font-size: 32px;
  color: white;
  font-weight: 200;
  margin-top: auto;
  margin-bottom: auto;
  height: fit-content;
`
export const HeaderSubText = styled.h4`
  font-size: 20px;
  color: rgba(255,255,255,0.5);
  font-weight: 100;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 50px;
`
export const H4Text = styled.h4`
  font-size: 18px;
  color: white;
  font-weight: 100;
  line-height: 40px;
  margin: 0px;
`