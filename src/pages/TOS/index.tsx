import {useEffect, useState } from 'react';
import { Background, Header, HeaderTitle, LeftBlock, RightWrapper } from '../../components/Style';

const TOS = () => {

  return (
    <Background>
      <LeftBlock/>
      <RightWrapper>
        <Header>
          <HeaderTitle>
            Terms of Service
          </HeaderTitle>
        </Header>
      </RightWrapper>
    </Background>
  )
}

export default TOS