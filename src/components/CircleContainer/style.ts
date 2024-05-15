import { Image } from 'react-native';
import styled from 'styled-components/native';

interface CircleProps {
  size: number;
  color: string;
}

export const CircleContainer = styled.View<CircleProps>`
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

