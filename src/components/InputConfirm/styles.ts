import styled, {css} from 'styled-components/native';

export const Container = styled.View<{marginBottom?: number}>`
  width: 100%;
  height: 46px;
  margin-bottom: ${({marginBottom}) => (marginBottom ? marginBottom : 0)}px;
`;

export const Input = styled.TextInput<{error: boolean}>`
  width: 100%;
  height: 44px;
  padding-left: 10px;
  padding-right: 54px;
  /* font-family: 'SF Pro'; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #212121;
  background-color: #ffffff;
  border: 1px solid rgba(33, 33, 33, 0.12);
  border-radius: 4px;

  ${({error}) =>
    error &&
    css`
      border-color: #e72c37;
      color: #e72c37;
    `};
`;

export const TextError = styled.Text`
  /* font-family: 'SF Pro'; */
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #e72c37;
  padding-top: 8px;
`;

export const ButtonRight = styled.TouchableOpacity<{error: boolean}>`
  width: 44px;
  height: 44px;
  background-color: #6959ff;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  position: absolute;
  right: 0;

  ${({disabled}) =>
    disabled &&
    css`
      opacity: 0.4;
    `};

  ${({error}) =>
    error &&
    css`
      background-color: #e72c37;
    `};
`;
