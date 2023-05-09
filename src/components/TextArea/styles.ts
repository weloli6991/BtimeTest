import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 117px;
  margin-bottom: 15px;
  justify-content: center;
`;

export const Input = styled.TextInput<{error: boolean}>`
  width: 100%;
  height: 117px;
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
