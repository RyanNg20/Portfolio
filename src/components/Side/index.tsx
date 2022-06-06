import { useEffect, useState, } from 'react';
import { SideWrapper, SideImage, LineStyle1, LineStyle2, LineStyle3, LineStyle4, LineWrapper, Text, Circle } from './Style';

interface SideProps{
  position: number[]
} 

const Side = (props:SideProps) => {
  const lineX = ['15px','15px','0px','0px']
  const lineY = ['0px','-5px','-11px','-18px']
  const textX = ['60px','80px','50px','0px']
  const textY = ['-50px','-30px','-70px','0px']
  const Lines = [LineStyle1, LineStyle2, LineStyle3, LineStyle4]
  // const texts = ['Projects', 'Art', 'About', '']
  const [texts, setTexts] = useState(['','','',''])
  const [actives, setActives] = useState([false,false,false,false])

  let pageNames: any = {
    Projects: [-3,-1],
    About: [-2,-2],
    Art: [-1,-1],
  }
  useEffect(() => {
    let i = 0
    while (actives[i] == true) i++

    for (const property in pageNames) {
      if (pageNames[property][0] === props.position[0] && pageNames[property][1] === props.position[1] && !texts.includes(property)) {
        let temp = texts
        temp[i] = property
        setTexts(temp)
  
        let temp2 = actives
        temp2[i] = true
        setActives(temp2)
      }
    }
  }, [props.position])

  return (
    <SideWrapper position={props.position}>
      <LineWrapper>
        {Lines.map((Line, index) => {
          return (
            <>
              <Line active={actives[index]} translateX={lineX[index]} translateY={lineY[index]} />
              <Text active={actives[index]} translateX={textX[index]} translateY={textY[index]}>
                {texts[index]}
              </Text>
            </>
          )
        })}
      </LineWrapper>
      <SideImage position={props.position}/>
    </SideWrapper>
  ) 
}

export default Side