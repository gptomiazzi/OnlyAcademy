import styled from 'styled-components/native';

export const Background = styled.Image`
    width: 100%;
    height: 100%;
`;

export const Header = styled.ImageBackground`
    height: 55%;
    padding: 20px;
`;

export const SafeButtonsWrapper = styled.SafeAreaView`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 55%;
    padding: 10px;
`;

export const DataContainer = styled.View`
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const UserDataContainer = styled.View`
    display: flex;
    flex-direction: column;
    width: 291px;
`;

export const UserData = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const BlackText = styled.Text`
    font-size: 16px;
    color: black;
    font-family: ${({theme}) => theme.fonts.regular};
`;

export const BlackBoldText = styled.Text`
    font-size: 16px;
    color: black;
    font-family: ${({theme}) => theme.fonts.bold};
    margin-bottom: 7px;
`;

export const DescriptionCotainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
`;

export const ButtonWrapper = styled.View`
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    width: 260px;
    margin-top: 10px;
`;

export const CategoriesContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    gap: 20px;
`;

export const MediaCard = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    background-color: #fefefe;
    width: 100%;
    height: 45%;
    border-radius: 50px;
    overflow: hidden;
`;

export const CardImage = styled.Image`
    width: 93%;
    height: 93%; 
    border-Radius: 50px;
`;