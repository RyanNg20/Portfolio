import {useEffect, useState } from 'react';
import { Background, Header, HeaderTitle, LeftBlock, RightWrapper, ScrollWrapper } from '../../components/Style';
import { ArtWrapper, ArtStyling, ArtGradient } from './Style';
import { onWheel } from '../../components/ScrollFunctions';

const Art = () => {
  const artLinks = [
    require('../../assets/images/art/1.jpg'),
    require('../../assets/images/art/2.jpg'),
    require('../../assets/images/art/3.png'),
    require('../../assets/images/art/4.png'),
    require('../../assets/images/art/5.jpg'),
    require('../../assets/images/art/6.png'),
    require('../../assets/images/art/7.png'),
    require('../../assets/images/art/8.jpg'),
    require('../../assets/images/art/9.png'),
    require('../../assets/images/art/10.png'),
    require('../../assets/images/art/11.png'),
  ]

  return (
    <Background>
      <LeftBlock/>
      <RightWrapper>
        <Header>
          <HeaderTitle>
            Art
          </HeaderTitle>
        </Header>
        <ArtGradient/>
        <ScrollWrapper onWheel={onWheel}>
          <ArtWrapper>
            {artLinks.map((art, index) => {
              return (
                <ArtStyling key={index} src={art}/>
              )
            })}
          </ArtWrapper>
        </ScrollWrapper>
      </RightWrapper>
    </Background>
  )
}

export default Art