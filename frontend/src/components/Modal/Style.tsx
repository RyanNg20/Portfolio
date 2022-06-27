import styled, { keyframes } from 'styled-components';

interface ModalBackgroundProps {
  show: boolean;
}
export const ModalBackground = styled.div<ModalBackgroundProps>`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,0.5);
  opacity: ${(props) => props.show?1:0};
  transition: opacity 1s;
  z-index: ${(props) => props.show?200:0};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalWrapper = styled.div`
  height: 200px;
  width: 300px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`