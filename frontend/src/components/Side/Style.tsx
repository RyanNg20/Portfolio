import styled from 'styled-components';
import side from '../../assets/images/side.png'
import {ReactComponent as Line1} from '../../assets/images/lines/1.svg'
import {ReactComponent as Line2} from '../../assets/images/lines/2.svg'
import {ReactComponent as Line3} from '../../assets/images/lines/3.svg'
import {ReactComponent as Line4} from '../../assets/images/lines/4.svg'

export const RightBackground = styled.div`
  height: 100vw;
`
interface PositionProps {
  position: number[]
}
export const SideWrapper = styled.div<PositionProps>`
  position: fixed;
  height: 100vh;
  width: clamp(210px, 20%,300px);
  z-index: 100;
  opacity: ${(props) => props.position[0] === -2 && props.position[1] === -1?0:1};
  transition: opacity 1s;
  overflow: hidden;
  display: flex;
  justify-content: center;
`
export const SideImage = styled.div<PositionProps>`
  background-image: url(${side});
  background-size: cover;
  position: absolute;
  top: 0px;
  transition: opacity 1s;
  opacity: ${(props) => props.position[0] === -2 && props.position[1] === -1?0:0.3};
  height: 100vh;
  width: 300px;
  z-index: 100;
  box-shadow: 10px 5px 8px rgba(0,0,0,0.8);
`
export const LineWrapper = styled.div`
  transform: scale(1, 0.90) translateX(20px);
  width: min-content;
  z-index: 101;
`
interface LineProps {
  translatex: string,
  translatey: string,
  active: boolean,
}
/***************************************************
 * Generated by SVG Artista on 6/5/2022, 12:37:43 AM
 * MIT license (https://opensource.org/licenses/MIT)
 * W. https://svgartista.net
 **************************************************/
export const LineStyle1 = styled(Line1)<LineProps>`
  z-index: 150;
  transform: ${(props) => `translate(${props.translatex}, ${props.translatey})`};
  stroke-dashoffset: ${(props) => props.active?'0':'424.378173828125'}px;
  stroke-dasharray: 424.378173828125px;
  transition: stroke-dashoffset 0.8s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
`
/***************************************************
 * Generated by SVG Artista on 6/4/2022, 11:18:15 PM
 * MIT license (https://opensource.org/licenses/MIT)
 * W. https://svgartista.net
 **************************************************/
export const LineStyle2 = styled(Line2)<LineProps>`
  z-index: 150;
  transform: ${(props) => `translate(${props.translatex}, ${props.translatey})`};
  stroke-dashoffset: ${(props) => props.active?'0':'194.9899139404297'}px;
  stroke-dasharray: 194.9899139404297px;
  transition: stroke-dashoffset 0.8s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
`
/***************************************************
 * Generated by SVG Artista on 6/4/2022, 11:21:42 PM
 * MIT license (https://opensource.org/licenses/MIT)
 * W. https://svgartista.net
 **************************************************/
export const LineStyle3 = styled(Line3)<LineProps>`
  z-index: 150;
  transform: ${(props) => `translate(${props.translatex}, ${props.translatey})`};
  stroke-dashoffset: ${(props) => props.active?'0':'395.8667907714844'}px;
  stroke-dasharray: 395.8667907714844px;
  transition: stroke-dashoffset 0.8s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
`
/***************************************************
 * Generated by SVG Artista on 6/4/2022, 11:22:33 PM
 * MIT license (https://opensource.org/licenses/MIT)
 * W. https://svgartista.net
 **************************************************/
export const LineStyle4 = styled(Line4)<LineProps>`
  z-index: 150;
  transform: ${(props) => `translate(${props.translatex}, ${props.translatey})`};
  stroke-dashoffset: ${(props) => props.active?'0':'274.1213073730469'}px;
  stroke-dasharray: 274.1213073730469px;
  transition: stroke-dashoffset 0.8s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
`
interface TextProps {
  translatex: string,
  translatey: string,
  active: boolean,
}
export const Text = styled.h3<TextProps>`
  position: absolute;
  z-index: 150;
  color: white;
  font-weight: 300;
  font-family: Roboto;
  transform: ${(props) => `translate(${props.translatex}, ${props.translatey})`} scaleY(1.1111);
  opacity: ${(props) => props.active?1:0};
  transition: opacity 1s;
`
export const Circle = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 100px;
  background: radial-gradient(circle farthest-side, rgba(255,255,255,0.6) 0px, rgba(0,0,0,0) 30%);
  position: absolute;
  transform: translate(-15px, -20px)
`