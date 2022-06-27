import {useEffect, useState } from 'react';
import { Background, Header, HeaderTitle, LeftBlock, RightWrapper} from '../../components/Style';

const CommissionList = () => {
  const artLinks = [
    require('../../assets/images/art/1.png'),
    require('../../assets/images/art/2.png'),
    require('../../assets/images/art/3.png'),
    require('../../assets/images/art/4.png'),
    require('../../assets/images/art/5.png'),
    require('../../assets/images/art/6.png'),
    require('../../assets/images/art/7.png'),
    require('../../assets/images/art/8.jpg'),
    require('../../assets/images/art/9.jpg'),
  ]

  return (
    <Background>
      <LeftBlock/>
      <RightWrapper>
        <Header>
          <HeaderTitle>
            Commission List
          </HeaderTitle>
        </Header>
      </RightWrapper>
    </Background>
  )
}

export default CommissionList