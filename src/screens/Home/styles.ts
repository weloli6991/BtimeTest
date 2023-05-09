import {Dimensions, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled, {css} from 'styled-components/native';

export const View = styled.View``;

export const Header = styled.View`
  width: 100%;
  height: ${Platform.OS === 'ios' ? 185 : 145}px;
  align-items: center;
`;

export const Background = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const WrapperInput = styled.View`
  width: 100%;
  padding: 0 20px;
  margin-top: 24px;
  margin-bottom: 20px;
`;
