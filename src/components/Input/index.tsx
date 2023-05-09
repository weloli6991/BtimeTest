import React, {Fragment} from 'react';
import _ from 'lodash';
import * as S from './styles';
import {TextInputProps} from 'react-native';
import Check from '@images/icons/check.svg';
import {Control, Controller} from 'react-hook-form';
import {
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from 'react-native-masked-text';

interface CInputProps extends TextInputProps {
  control: Control;
  name: string;
  mask?: boolean;
  type?: TextInputMaskTypeProp;
  options?: TextInputMaskOptionProp;
}

export const CInput = ({
  control,
  name,
  mask,
  type,
  options,
  ...rest
}: CInputProps) => {
  return (
    <S.Container>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <S.View>
            {!mask && (
              <S.Input
                {...rest}
                placeholderTextColor={
                  error && error?.message ? '#E72C37' : 'rgba(33, 33, 33, 0.4)'
                }
                onChangeText={onChange}
                value={value}
                error={error && error?.message ? true : false}
                selectionColor={
                  error && error?.message ? '#E72C37' : 'rgba(33, 33, 33, 0.4)'
                }
                autoCapitalize="none"
                autoCorrect={false}
              />
            )}
            {mask && (
              <S.TextInputM
                {...rest}
                placeholderTextColor={
                  error && error?.message ? '#E72C37' : 'rgba(33, 33, 33, 0.4)'
                }
                onChangeText={onChange}
                value={value}
                error={error && error?.message ? true : false}
                selectionColor={
                  error && error?.message ? '#E72C37' : 'rgba(33, 33, 33, 0.4)'
                }
                type={type as TextInputMaskTypeProp}
                options={options as TextInputMaskOptionProp}
                autoCapitalize="none"
                autoCorrect={false}
              />
            )}
            <S.TextError accessible={false}>
              {error && error?.message ? error?.message : ''}
            </S.TextError>
          </S.View>
        )}
      />
    </S.Container>
  );
};
