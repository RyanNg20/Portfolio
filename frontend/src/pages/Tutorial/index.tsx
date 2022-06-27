import { ArrowWrapper } from './Style';
import { Background } from '../../components/Style';
import { ChevronBackOutline, ChevronForwardOutline, ChevronDownOutline, ChevronUpOutline} from 'react-ionicons'

interface TutorialProps {
  pressedRight: boolean,
  pressedLeft: boolean,
  pressedUp: boolean,
  pressedDown: boolean,
}
const Tutorial = (props: TutorialProps) => {
  let Chevrons = ['div', ChevronUpOutline,'div', ChevronBackOutline, ChevronDownOutline, ChevronForwardOutline]
  return (
    <Background>
      <ArrowWrapper>
        {Chevrons.map((Chevron, index) => {
          const pressed = (props.pressedRight && index === 5)||(props.pressedLeft && index === 3)||(props.pressedUp && index === 1)||(props.pressedDown && index === 4)
          return (
            <Chevron
              key={index}
              style={{
                backgroundColor: pressed?'FFA800':'rgba(255,255,255,0.1)',
                borderRadius: 4,
                padding: 11,
                height: 32,
                width: 32,
                display: 'flex',
                marginLeft: 'auto',
                marginRight: 'auto',
                opacity: index === 0 || index === 2?0:1,
                margin: 3,
              }}
              color={pressed?'white':'rgba(255,255,255,0.2)'}
            />
          )
        })}
      </ArrowWrapper>
    </Background>
  )
}

export default Tutorial