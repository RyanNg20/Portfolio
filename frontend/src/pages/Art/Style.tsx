import styled from 'styled-components';

export const ArtWrapper = styled.div`
  display: inline-block;
`

export const ArtStyling = styled.img`
  height: 620px;
  margin: 0px 25px;
`
export const ArtGradient = styled.div`
  background: linear-gradient(to right, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8));
  z-index: 100;
  position: absolute;
  height: calc(100% - 180px);
  width: 100%;
  pointer-events: none;
  bottom: 0px;
`