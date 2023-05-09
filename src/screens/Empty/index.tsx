import {CBoard} from '@components';
import React from 'react';
import Background from '@images/background.png';
import Logo from '@images/icons/logo.svg';
import Plus from '@images/icons/plus.svg';
import ImgBackground from '@images/icons/png/img_background.png';
import {SafeAreaView, StatusBar} from 'react-native';

import * as S from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@routes';

type EmptyNavigation = NativeStackNavigationProp<RootStackParamList>;

export const Empty = () => {
  const {navigate} = useNavigation<EmptyNavigation>();
  return (
    <S.Container>
      <S.SafeArea translucent={true} backgroundColor={'transparent'} />
      <S.View>
        <S.Background source={Background} resizeMode="cover" />
        <S.Wrapper>
          <Logo />
          <S.ImgBackground source={ImgBackground} resizeMode="contain" />

          <S.WrapperTexts>
            <S.Text>Tão vazio por aqui...</S.Text>
            <S.Text2>
              Crie sua primeira coluna e desbrave o incrível mundo B-time de se
              organizar. Seus cartões de tarefas estarão em ótimas mãos.
            </S.Text2>
            <S.Button onPress={() => navigate('Home')}>
              <Plus fill="#fff" />
              <S.TextButton>Nova coluna</S.TextButton>
            </S.Button>
          </S.WrapperTexts>
        </S.Wrapper>
      </S.View>
    </S.Container>
  );
};
