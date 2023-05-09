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

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 54px;
  background-color: #6959ff;
  border: 1px solid rgba(33, 33, 33, 0.12);
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const TextButton = styled.Text`
  /* font-family: 'SF Pro'; */
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  margin-right: 10px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
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