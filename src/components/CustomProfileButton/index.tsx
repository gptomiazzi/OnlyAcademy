import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';

type ButtonProps = {
  onPress?: () => void;
  title?: string;
  textColor?: string;
  color?: string;
};

const ButtonContainer = styled.TouchableOpacity<ButtonProps>`
  width: 120px;
  height: 45px;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: ${(props) => props.color || '#5790DF'};
  align-items: center;
  justify-content: center;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
`;

const ButtonText = styled.Text<ButtonProps>`
  color: ${(props) => props.textColor || 'black'};
  font-size: 16px;
`;

export const CustomProfileButton: React.FC<ButtonProps> = ({ onPress, title, color, textColor }) => (
  <ButtonContainer onPress={onPress} color={color}>
    <ButtonText textColor={textColor}>{title}</ButtonText>
  </ButtonContainer>
);