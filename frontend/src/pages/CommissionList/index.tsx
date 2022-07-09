import {useEffect, useState } from 'react';
import { Background, Header, HeaderTitle, LeftBlock, RightWrapper, H4Text} from '../../components/Style';
import { ListWrapper, RowWrapper, RowLine, TopRowWrapper, BotRowWrapper } from './Style';
import moment from 'moment'
import { ChevronDown } from 'react-ionicons';

const CommissionList = () => {
  const data = [
    {
      name: "Ryan Ng",
      type: "Full Body",
      date: new Date(),
      status: "Pending",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt i"
    },
    {
      name: "Jon",
      type: "Head",
      date: new Date(),
      status: "Cancelled",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt m",
    },
    {
      name: "Bob",
      type: "Bust",
      date: new Date(),
      status: "Completed",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }
  ]
  const [openDropdown, setOpenDropdown] = useState(new Array(data.length).fill(false))
  console.log(openDropdown)
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
          {data.map((element, index) => {
            return (
              <>
                <RowWrapper
                  onClick={() => {

                    setOpenDropdown([...openDropdown.slice(0, index), !openDropdown[index], ...openDropdown.slice(index + 1, openDropdown.length)])
                  }}
                > 
                  <TopRowWrapper>
                    <H4Text style={{width: 150}}>{element.name}</H4Text>
                    <H4Text style={{width: 150}}>{element.type}</H4Text>
                    <H4Text style={{width: 150}}>{moment(element.date).format('MM' + '/' + 'DD'+ '/' + 'YYYY')}</H4Text>
                    <div style={{flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', marginRight: 20, marginLeft: 20}}>
                      <H4Text>{element.status}</H4Text>
                    </div>
                    <ChevronDown color="white" width="20px" style={{marginTop: 5}}/>
                  </TopRowWrapper>
                  {openDropdown[index] &&
                    <BotRowWrapper>
                      {element.description}
                    </BotRowWrapper>
                  }
                </RowWrapper>
                <RowLine/>
              </>
            )
          })}
        </ListWrapper>
      </RightWrapper>
    </Background>
  )
}

export default CommissionList