import {Dimensions} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Card = styled.View`
  width: ${Dimensions.get('window').width * 0.8 - 40}px;
  background-color: #ffffff;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  /* font-family: 'SF Pro'; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #212121;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const WrapperText = styled.View`
  /* max-width: 100%; */
  padding: 6px;
  background-color: rgba(33, 33, 33, 0.05);
  border-radius: 2px;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Text = styled.Text`
  /* font-family: 'SF Pro'; */
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: rgba(33, 33, 33, 0.8);
  padding-left: 5px;
`;

export const WrapperPriority = styled.View<{priority: 1 | 2 | 3}>`
  background-color: rgba(0, 204, 0, 0.1);
  border-radius: 2px;
  padding: 5px;

  ${({priority}) =>
    priority === 2 &&
    css`
      background-color: rgba(255, 165, 0, 0.1);
    `}

  ${({priority}) =>
    priority === 3 &&
    css`
      background-color: rgba(255, 0, 0, 0.1);
    `}
`;

export const TextPriority = styled.Text<{priority: 1 | 2 | 3}>`
  /* font-family: 'SF Pro'; */
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: #007100;

  ${({priority}) =>
    priority === 2 &&
    css`
      color: #9f6a09;
    `}

  ${({priority}) =>
    priority === 3 &&
    css`
      color: #a70000;
    `}
`;

export const WrapperIconUser = styled.View`
  position: absolute;
`;

export const IconUser = styled.Image``;
