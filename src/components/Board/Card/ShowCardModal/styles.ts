import Modal from 'react-native-modal';
import styled, {css} from 'styled-components/native';

export const ModalView = styled(Modal)`
  justify-content: flex-end;
  margin: 0;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    margin: 0,
    padding: 0,
    justifyContent: 'flex-end',
  },
})`
  margin: 0;
  padding: 0;
`;

export const ContainerModal = styled.View`
  width: 100%;
  /* height: 100%; */
  padding: 30px;
  align-items: center;
  background: #ffffff;
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
`;

export const Title = styled.Text`
  /* font-family: 'SF Pro'; */
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  text-align: center;
  color: #212121;
  margin-bottom: 45px;
`;

export const SubTitle = styled.Text`
  /* font-family: 'SF Pro'; */
  width: 100%;
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  color: rgba(33, 33, 33, 0.8);
  text-align: left;
`;

export const ButtonDelete = styled.TouchableOpacity`
  width: 100%;
  height: 54px;
  background-color: #e72c37;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const TextButtonDelete = styled.Text`
  /* font-family: 'SF Pro'; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  margin-right: 10px;
`;

export const WrapperResponsible = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const IconUser = styled.Image``;

export const TextName = styled.Text`
  /* font-family: 'SF Pro'; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: rgba(33, 33, 33, 0.8);
  margin-left: 5px;
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
