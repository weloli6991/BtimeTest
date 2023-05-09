import {CBoard, CInput} from '@components';
import React from 'react';
import Background from '@images/background.png';
import Logo from '@images/icons/logo.svg';
import {Platform, SafeAreaView, StatusBar} from 'react-native';

import * as S from './styles';
import {useForm} from 'react-hook-form';

export const Home = () => {
  const {handleSubmit, control, setValue, reset, watch} = useForm({
    mode: 'onChange',
  });

  const search = watch('search');

  return (
    <S.View style={{flex: 1}}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <S.Header>
        <S.Background source={Background} resizeMode="cover" />
        <SafeAreaView style={{backgroundColor: 'transparent'}} />
        <Logo style={{marginTop: Platform.OS === 'android' ? 20 : 0}} />
        <S.WrapperInput>
          <CInput
            name="search"
            control={control}
            placeholder="Pesquise no board"
          />
        </S.WrapperInput>
      </S.Header>
      <CBoard search={search} />
    </S.View>
  );
};
