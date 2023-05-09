import React, {Fragment} from 'react';
import _ from 'lodash';
import * as S from './styles';
import {TextInputProps} from 'react-native';
import Check from '@images/icons/check.svg';
import {Control, Controller} from 'react-hook-form';

interface CInputConfirmProps extends TextInputProps {
  control: Control;
  name: string;
  onPress?: () => void;
}

export const CInputConfirm = ({
  control,
  name,
  onPress,
  ...rest
}: CInputConfirmProps) => {
  return (
    <S.Container>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, value}, fieldState: {error}}) => (
          <Fragment>
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
            <S.ButtonRight
              onPress={() => {
                if (onPress) {
                  onPress();
                }
              }}
              error={error && error?.message ? true : false}
              disabled={!value}>
              <Check />
            </S.ButtonRight>
            <S.TextError accessible={false}>
              {error && error?.message ? error?.message : ''}
            </S.TextError>
          </Fragment>
        )}
      />
    </S.Container>
  );
};
