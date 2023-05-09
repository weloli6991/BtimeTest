import React, {useState} from 'react';

import * as S from './styles';
import {CInput} from '@components/Input';
import {useForm} from 'react-hook-form';
import Check from '@images/icons/check.svg';
import Plus from '@images/icons/plus.svg';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {CTextArea} from '@components/TextArea';
import {responsibles} from '@mocks';
import {IResponsiblesBoard} from '@models';

interface SelectResponsiblesModalProps {
  isVisible: boolean;
  setIsVisible: Function;
  setIsVisibleAddCard: Function;
  responsiblesSelect: IResponsiblesBoard[];
  setResponsiblesSelect: Function;
}

export const SelectResponsiblesModal = ({
  isVisible,
  setIsVisible,
  setIsVisibleAddCard,
  responsiblesSelect,
  setResponsiblesSelect,
}: SelectResponsiblesModalProps) => {
  const setSelect = (data: IResponsiblesBoard) => {
    const filter = responsiblesSelect.filter((r, i) => r.id === data.id);
    let _selected;

    if (filter.length === 0) {
      _selected = [...responsiblesSelect, data];
      setResponsiblesSelect(_selected);
    } else {
      _selected = responsiblesSelect.filter((r, i) => r.id !== data.id);
      setResponsiblesSelect(_selected);
    }
  };

  return (
    <S.ModalView
      isVisible={isVisible}
      onBackButtonPress={() => setIsVisible(false)}
      onBackdropPress={() => setIsVisible(false)}>
      <S.Scroll>
        <S.ContainerModal>
          <S.Title>Escolha os responsáveis</S.Title>

          {responsibles.map((r, i) => {
            return (
              <S.WrapperResponsible
                key={i}
                onPress={() => {
                  setSelect(r);
                }}>
                <S.Row>
                  <S.IconUser source={r.icon} />
                  <S.TextName>{r.name}</S.TextName>
                </S.Row>

                {responsiblesSelect.map((r2, i2) => {
                  if (r2.id === r.id) return <Check key={i} fill="#000" />;
                })}
              </S.WrapperResponsible>
            );
          })}

          <S.Button
            onPress={() => {
              setIsVisible(false);

              setTimeout(() => {
                setIsVisibleAddCard(true);
              }, 700);
            }}>
            <S.TextButton>Salvar</S.TextButton>
            <Plus fill="#fff" />
          </S.Button>
        </S.ContainerModal>
      </S.Scroll>
    </S.ModalView>
  );
};
