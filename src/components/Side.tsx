import { useEffect, useState, } from 'react';
import { SideWrapper } from './Style';

interface SideProps{
  position: number[]
} 

const Side = (props:SideProps) => {

  return (
    <SideWrapper position={props.position}>

    </SideWrapper>
  )
}

export default Side