import styled from 'styled-components';
import { colors } from "../../colors"

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 100px;
`
export const RowWrapper = styled.div`
  background-color: rgba(0,0,0,0);
  transition: background-color 0.3s;
  &:hover {
    background-color: ${colors.purple}
  }
  padding: 15px 0px;
  border-radius: 10px;
`
export const TopRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 15px;
`
export const BotRowWrapper = styled.div`
  background-color: rgba(0,0,0,0.3);
  border-radius: 15px;
  width: calc(100% - 70px);
  height: fit-content;
  padding: 20px;
  margin: 15px;
`

export const RowLine = styled.span`
  width: calc(100% - 20px);
  background-color: rgba(255,255,255,0.5);
  height: 1px;
  margin: 0px 10px;
`