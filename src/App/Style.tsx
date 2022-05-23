import styled, { createGlobalStyle, keyframes, css } from 'styled-components';
import { colors } from '../colors'

interface AppProps {
  XPosition: number,
  YPosition: number,
  width: number,
  height: number,
}
export const AppStyle = styled.div<AppProps>`
  background: ${colors.background};
  height: ${(props) => props.height}vh;
  width: ${(props) => props.width}vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  font-family: Roboto;
  font-size: 20px;
  color: white;
  &::-webkit-scrollbar {
    display: none;
  }
  transition: transform 1s;
  transform: ${(props) => `translateX(${props.XPosition}%) translateY(${props.YPosition}%)`}
`
export const Link = styled.a`
  text-decoration: none;
  color: ${colors.gray};
`