import styled from 'styled-components';
import Arrow from '../../assets/images/chevron-down-outline.svg'
import { colors } from '../../colors'

export const FormWrapper = styled.form`
  width: calc(100% - 200px);
  height: 100%;
  padding-left: 100px;
  padding-right: 100px;
`

export const FormLabel = styled.label``
export const FormInput = styled.input`
  background-color: rgba(0,0,0,0.3);
  border-style: none;
  border-radius: 5px;
  padding: 5px 20px;
  font-size: 20px;
  color: white;
  font-weight: 100;
  line-height: 40px;
  margin: 15px;
  font-family: Roboto;

  &:focus-visible {
    outline: none;
    outline: 1px solid rgba(255,255,255,0.5);
  }
`
export const FormDropdown = styled.select`
  background-color: rgba(0,0,0,0.3);
  border-style: none;
  border-radius: 5px;
  padding: 15px 45px 15px 20px;
  font-size: 18px;
  color: white;
  font-weight: 100;
  margin: 15px;
  font-family: Roboto;
  appearance: none;
  background-image: url(${Arrow});
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: right 15px center;

  &:focus-visible {
    outline: none;
    outline: 1px solid rgba(255,255,255,0.5);
  }
`

export const FormOption = styled.option`
  background-color: rgba(0,0,0,0.8);
`
export const FormSubmit = styled.input`
  display: block;
  margin-top: 20px;
  margin-left: auto;
  background-color: ${colors.orange};
  color: white;
  border: none;
  padding: 10px 30px;
  border-radius: 8px;
  font-family: Roboto;
  font-weight: 100;
  font-size: 18px;
  width: fit-content;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    background-color: white;
    color: ${colors.orange};
  }
`