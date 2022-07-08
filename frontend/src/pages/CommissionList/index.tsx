import {useEffect, useState } from 'react';
import { Background, Header, HeaderTitle, LeftBlock, RightWrapper, H4Text} from '../../components/Style';
import { ListWrapper, RowWrapper, RowLine } from './Style';
import moment from 'moment'

const CommissionList = () => {

  return (
    <Background>
      <LeftBlock/>
      <RightWrapper>
        <Header>
          <HeaderTitle>
            Commission List
          </HeaderTitle>
        </Header>
        <ListWrapper>
          <RowWrapper>
            <H4Text>Ryan Ng</H4Text>
            <H4Text>Full Body</H4Text>
            <H4Text>{moment(new Date()).format('MM' + '/' + 'DD'+ '/' + 'YYYY')}</H4Text>
            <H4Text style={{flexGrow: 1, marginLeft: 'auto', marginRight: 'auto', display: 'flex'}}>Pending</H4Text>
          </RowWrapper>
          <RowLine/>
        </ListWrapper>
      </RightWrapper>
    </Background>
  )
}

export default CommissionList