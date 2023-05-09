import {Dimensions, Platform} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const SafeArea = styled.StatusBar``;

export const View = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  padding-top: ${Platform.OS === 'ios' ? 100 : 50}px;
`;

export const Background = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const OpacityImg = styled.View`
  background-color: #000;
  opacity: 0.4;
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const WrapperTexts = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  /* font-family: 'SF Pro'; */
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 24px;
`;

export const Text2 = styled.Text`
  /* font-family: 'SF Pro'; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 24px;
`;

export const ImgBackground = styled.Image`
  width: ${Dimensions.get('window').width - 100}px;
  height: ${Dimensions.get('window').height * 0.25}px;
`;

export const WrapperButton = styled.View`
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  width: ${Dimensions.get('window').width * 0.5}px;
  height: 48px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const TextButton = styled.Text`
  /* font-family: 'SF Pro'; */
  font-style: normal;
  font-weight: 400;
  font-size: ${Dimensions.get('window').width * 0.035}px;
  color: rgba(255, 255, 255, 0.8);
`;
