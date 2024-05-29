import { Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

interface CircleProps {
  size: number;
  color: string;
  onPress?: () => void;
}

export const CircleContainer = styled(TouchableOpacity)<CircleProps>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
  background-color: ${(props) => props.color};
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const CircleImage = styled(Image)`
  width: 100%;
  height: 100%;
  overflow: cover;
`;

