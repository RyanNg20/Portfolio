import {useEffect, useState } from 'react';
import { Background, Header, HeaderTitle, LeftBlock, RightWrapper } from '../../components/Style';

const CommissionForm = () => {

  return (
    <Background>
      <LeftBlock/>
      <RightWrapper>
        <Header>
          <HeaderTitle>
            Commission Form
          </HeaderTitle>
        </Header>
      </RightWrapper>
    </Background>
  )
}

export default CommissionForm