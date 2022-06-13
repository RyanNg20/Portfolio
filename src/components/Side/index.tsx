import { useEffect, useState, } from 'react';
import Modal from '../Modal';
import { SideWrapper, SideImage, LineStyle1, LineStyle2, LineStyle3, LineStyle4, LineWrapper, Text, Circle } from './Style';

interface SideProps{
  position: number[]
} 

const Side = (props:SideProps) => {
  const lineX = ['15px','15px','0px','0px']
  const lineY = ['0px','-5px','-11px','-18px']
  const textX = ['60px','60px','60px','0px']
  const textY = ['-50px','-30px','-80px','0px']
  const Lines = [LineStyle1, LineStyle2, LineStyle3, LineStyle4]
  // const texts = ['Projects', 'Art', 'About', '']
  const [texts, setTexts] = useState(['','','',''])
  const [actives, setActives] = useState([false,false,false,false])
  const [showModal, setShowModal] = useState(false)
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
        console.log('hi')
        let temp = texts
        temp[i] = property
        setTexts(temp)
  
        let temp2 = actives
        temp2[i] = true
        setActives(temp2)
      }
    }
  }, [props.position])

  useEffect(() => {
    if (actives[2]) {
      setShowModal(true)
      let temp = actives
      temp[3] = true
      setActives(temp)
    }
  }, [actives[2]])
  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      <SideWrapper position={props.position}>
        <LineWrapper>
          {Lines.map((Line, index) => {
            return (
              <div key={index}>
                <Line active={actives[index]} translatex={lineX[index]} translatey={lineY[index]}/>
                <Text active={actives[index]} translatex={textX[index]} translatey={textY[index]}>
                  {texts[index]}
                </Text>
              </div>
            )
          })}
        </LineWrapper>
        <SideImage position={props.position}/>
      </SideWrapper>
    </>
  ) 
}

export default Side