import {Dimensions, Platform} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Column = styled.View`
  width: ${Dimensions.get('window').width * 0.8}px;
  background-color: rgba(105, 89, 255, 0.1);
  border-radius: 10px;
  margin: 0 10px;
  padding: 16px 20px;
  height: ${Platform.OS === 'ios'
    ? Dimensions.get('window').height * 0.94 - 185
    : Dimensions.get('window').height * 0.94 - 145}px;
  margin-top: 20px;
`;

export const Header = styled.View`
  margin-top: 14px;
`;

export const Title = styled.Text`
  /* font-family: 'SF Pro'; */
  width: ${Dimensions.get('window').width * 0.8 - 126}px;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  color: #212121;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonLeft = styled.TouchableOpacity`
  background-color: #f4f3ff;
  border-radius: 4px;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  margin-right: 2.5px;
`;

export const ButtonRight = styled.TouchableOpacity`
  background-color: #f4f3ff;
  border-radius: 4px;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  margin-left: 2.5px;
`;

export const Quantity = styled.Text`
  /* font-family: 'SF Pro'; */
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #212121;
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  border: 1px dashed rgba(105, 89, 255, 0.52);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextButtonAdd = styled.Text`
  /* font-family: 'SF Pro'; */
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: rgba(105, 89, 255, 0.8);
  margin-left: 5px;
`;

export const TitleNewColumn = styled.Text`
  /* font-family: 'SF Pro'; */
  width: ${Dimensions.get('window').width * 0.8 - 40}px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: rgba(33, 33, 33, 0.8);
  margin-top: 10px;
`;

export const SubTitleNewColumn = styled.Text`
  /* font-family: 'SF Pro'; */
  width: ${Dimensions.get('window').width * 0.8 - 40}px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: rgba(33, 33, 33, 0.8);
  margin-top: 5px;
  margin-bottom: 15px;
`;
