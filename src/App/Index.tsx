import { useEffect, useState, } from 'react';
import { AppStyle, Link} from './Style'
import Tutorial from '../pages/Tutorial';

function App() {
  document.body.style.overflow = "hidden"
  const [position, setPosition] = useState([-2,-1])
  const [pressedRight, setPressedRight] = useState(false)
  const [pressedLeft, setPressedLeft] = useState(false)
  const [pressedUp, setPressedUp] = useState(false)
  const [pressedDown, setPressedDown] = useState(false)

  const slidePositions = [[0,0], [0,-1], [0,-2], [-1,-1], [-2,-1], [-2,-2], [-3,-1]]
  const NXSlides = 4
  const NYSlides = 3

  const useKeypress = (key: any, keyDownAction: any, keyUpAction: any) => {
    useEffect(() => {
      function onKeydown(e: any) {
        if (e.key === key) keyDownAction()
      }
      function onKeyUp(e: any) {
        if (e.key === key) keyUpAction()
      }
      window.addEventListener('keydown', onKeydown);
      window.addEventListener('keyup', onKeyUp)
      return (
        () => {
          window.removeEventListener('keydown', onKeydown)
          window.removeEventListener('keyup', onKeyUp)
        }
      );
    }, [keyDownAction, keyUpAction, key]);
  }

  useKeypress(
    'ArrowRight',
    () => setPressedRight(true),
    () => {
      if (slidePositions.some(slidePosition => slidePosition[0] === position[0] - 1 && slidePosition[1] === position[1])) setPosition([position[0] - 1, position[1]])
      setPressedRight(false)
    }
  );
  useKeypress('ArrowLeft',
    () => setPressedLeft(true),
    () => {
      if (slidePositions.some(slidePosition => slidePosition[0] === position[0] + 1 && slidePosition[1] === position[1])) setPosition([position[0] + 1, position[1]])
      setPressedLeft(false)
    }
  );
  useKeypress(
    'ArrowUp',
    () => setPressedUp(true),
    () => {
      if (slidePositions.some(slidePosition => slidePosition[0] === position[0] && slidePosition[1] === position[1] + 1)) setPosition([position[0], position[1] + 1])
      setPressedUp(false)
    }
  );
  useKeypress(
    'ArrowDown',
    () => setPressedDown(true),
    () => {
      if (slidePositions.some(slidePosition => slidePosition[0] === position[0] && slidePosition[1] === position[1] - 1)) setPosition([position[0], position[1] - 1])
      setPressedDown(false)
    }
  );

  return (
    <AppStyle
      XPosition={position[0] * 100 / NXSlides}
      YPosition={position[1] * 100 / NYSlides}
      width={NXSlides * 100}
      height={NYSlides * 100}
      onKeyDown={() => {console.log('hi')}}
    >
      <div style={{backgroundColor: 'black'}} />
      <div style={{backgroundColor: 'red'}}/>
      <div style={{backgroundColor: 'yellow'}}/>
      <div style={{backgroundColor: 'green'}}/>

      <div style={{backgroundColor: 'red'}}/>
      <div style={{backgroundColor: 'yellow'}}/>
      <Tutorial pressedRight={pressedRight} pressedLeft={pressedLeft} pressedUp={pressedUp} pressedDown={pressedDown}/>
      <div style={{backgroundColor: 'black'}}/>

      <div style={{backgroundColor: 'yellow'}}/>
      <div style={{backgroundColor: 'green'}}/>
      <div style={{backgroundColor: 'black'}}/>
      <div style={{backgroundColor: 'black'}}/>
      {/* <div className='contact'>
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer" className='link'>
          Twitter
        </a>
        &nbsp;|&nbsp;
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer" className='link'>
          Github
        </a>
        &nbsp;|&nbsp;
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer" className='link'>
          LinkedIn
        </a>
        &nbsp;|&nbsp;
        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer" className='link'>
          Resume
        </a>
      </div> */}
    </AppStyle>
  );
}

export default App;