import React, {useState} from 'react';
import {CInput} from '@components/Input';
import {useForm} from 'react-hook-form';
import Check from '@images/icons/check.svg';
import Plus from '@images/icons/plus.svg';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {CTextArea} from '@components/TextArea';
import * as S from './styles';

interface SelectPriorityModalProps {
  isVisible: boolean;
  setIsVisible: Function;
  setIsVisibleAddCard: Function;
  prioritySelect: 0 | 1 | 2 | 3;
  setPrioritySelect: Function;
}

export const SelectPriorityModal = ({
  isVisible,
  setIsVisible,
  setIsVisibleAddCard,
  prioritySelect,
  setPrioritySelect,
}: SelectPriorityModalProps) => {
  const getTextPriority = priority => {
    if (priority === 1) {
      return 'Baixa';
    } else if (priority === 2) {
      return 'Alta';
    } else if (priority === 3) {
      return 'Crítica';
    }
  };

  const setSelect = (data: number) => {
    setPrioritySelect(data);
  };

  return (
    <S.ModalView
      isVisible={isVisible}
      onBackButtonPress={() => setIsVisible(false)}
      onBackdropPress={() => setIsVisible(false)}>
      <S.Scroll>
        <S.ContainerModal>
          <S.Title>Escolha a prioridade</S.Title>

          {[1, 2, 3].map((r, i) => {
            return (
              <S.WrapperResponsible
                key={i}
                onPress={() => {
                  setSelect(r);
                }}>
                <S.Row>
                  <S.TextName>{getTextPriority(r)}</S.TextName>
                </S.Row>

                {r === prioritySelect && <Check fill="#000" />}
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
