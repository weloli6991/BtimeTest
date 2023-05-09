import React, {Fragment} from 'react';
import * as S from './styles';
import {TextInputProps} from 'react-native';
import {Control, Controller} from 'react-hook-form';

interface CTextAreaProps extends TextInputProps {
  control: Control;
  name: string;
}

export const CTextArea = ({control, name, ...rest}: CTextAreaProps) => {
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
              multiline={true}
              numberOfLines={4}
              textAlignVertical="top"
            />
            {error && error?.message && (
              <S.TextError>{error?.message}</S.TextError>
            )}
          </Fragment>
        )}
      />
    </S.Container>
  );
};
