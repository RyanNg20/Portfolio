import {useEffect, useState } from 'react';
import { RightBackground } from '../../components/Side/Style';
import { Background, Header, HeaderTitle, HeaderSubText, LeftBlock, RightWrapper, H4Text } from '../../components/Style';
import { FormDropdown, FormInput, FormLabel, FormWrapper, FormSubmit, FormOption } from './Style';

const CommissionForm = () => {

  return (
    <Background>
      <LeftBlock/>
      <RightWrapper>
        <Header>
          <HeaderTitle>
            Commission Form
          </HeaderTitle>
          <HeaderSubText>
            If you have any questions please contact me. My contact info is here:
          </HeaderSubText>
        </Header>
        <FormWrapper>
          <FormLabel>Name</FormLabel>
          <FormInput/><br/>
          <FormLabel>Type</FormLabel>
          <FormDropdown>
            <FormOption value="" disabled selected hidden>----</FormOption>
            <FormOption style={{padding: 20}}>Full Body</FormOption>
            <FormOption>Waist Up</FormOption>  
            <FormOption>Thigh Up</FormOption>  
            <FormOption>Head</FormOption>  
          </FormDropdown><br/>
          <FormLabel>Contact Info</FormLabel>
          <FormInput placeholder='Discord, Twitter, Email' style={{width: 'fit-content'}}/><br/>
          <FormLabel>Description</FormLabel>
          <FormInput
            style={{width: 'calc(100% - 200px)'}}
            placeholder='Character name and from what franchise, poses, how you want the character to look, etc.. Note: I do not do furry/NSFW'
          /><br/>
          <H4Text>
            After completion, your commission will show up in the Commission List below, where you can see the status of your art.
            If I accept, I will also message you updates after I finish certain stages of the drawing process such as sketching and lineart,
            at which point you may request changes. Commissions can take up to 5 months, so please be patient.
          </H4Text>
          <H4Text style={{color: "rgba(255,255,255,0.5)", display: 'block', marginLeft: 'auto', width: 'fit-content', marginTop: 50}}>
            By submitting this form you agree to the TOS stated in the panel above
          </H4Text>
          <FormSubmit type="Submit" value="Submit"/>
        </FormWrapper>
      </RightWrapper>
    </Background>
  )
}

export default CommissionForm