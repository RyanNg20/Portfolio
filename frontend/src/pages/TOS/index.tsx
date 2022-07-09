import {useEffect, useState } from 'react';
import { Background, Header, HeaderTitle, LeftBlock, RightWrapper, H4Text } from '../../components/Style';
import { TOSWrapper } from './Style';

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
        <TOSWrapper>
          <H4Text>
            1. Commissioned art can be freely edited and posted by the commissioner, as long as the following is true: <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a. I am given credit via twitter handle: @FerreroRopher <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b. The art is being used for personal use.<br/>
            2. I may use commissioned art in whatever way I see fit: Promoting myself, posting on social media, monetization the art piece, etc..<br/>
            3. Refunds will not be issued unless the commission is cancelled.<br/>
          </H4Text>
        </TOSWrapper>
      </RightWrapper>
    </Background>
  )
}

export default TOS