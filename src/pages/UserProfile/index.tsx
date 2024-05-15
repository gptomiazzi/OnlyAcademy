import React from "react";
import { Button, Image, Text, View } from "react-native";
import { RoundedFooter } from "../../components/RoundedFooter/style";
import { Header, UserData, DataContainer, UserDataText, UserDataContainer, DescriptionCotainer, UserDataTextBold, ButtonWrapper, SafeButtonsWrapper} from "./styles"
import {CircleContainer, CircleImage} from "../../components/CircleContainer/style";
import { CustomProfileButton } from "../../components/CustomProfileButton";

const img = require('../../assets/background.png');

function UserProfile() {
  return(
    <>
      <Header source={img}>

        <SafeButtonsWrapper>
          <CircleContainer size={44} color="#E6EEFA">
            
          </CircleContainer>
          <CircleContainer size={44} color="#E6EEFA">

          </CircleContainer>
        </SafeButtonsWrapper>
      </Header>
      
      <RoundedFooter>
        <CircleContainer size={100} color="#FEFEFE" 
          style={{
            position: "absolute",
            top: -50
          }}
        >
          <CircleImage source={require('../../assets/profile.png')} />
        </CircleContainer>
        
        <UserDataContainer>
          <DataContainer>
            <UserData>
              <UserDataTextBold>1K</UserDataTextBold>
              <UserDataText>Followers</UserDataText>
            </UserData>
            <UserData>
              <UserDataTextBold>342</UserDataTextBold>
              <UserDataText>Following</UserDataText>
            </UserData>
          </DataContainer>

        <DescriptionCotainer>
          <UserDataTextBold>@gabtomiazzi</UserDataTextBold>
          <Text style={{ fontSize: 16, color: '#6C7A9C' }}>
            Hello! I'm Gabriel. I like programming and I know how to play some percussion stuff =D
          </Text>
        </DescriptionCotainer>  
        </UserDataContainer>
        <ButtonWrapper>
          <CustomProfileButton title="Follow" textColor="#FFFFFF"/>
          <CustomProfileButton title="Message" color="#FFFFFF"/>
        </ButtonWrapper>
      </RoundedFooter>
    </> 
  );
};

export default UserProfile;