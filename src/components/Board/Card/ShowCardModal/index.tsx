import React, {useState} from 'react';
import Calendar from '@images/icons/calendar.svg';
import Location from '@images/icons/location.svg';
import Description from '@images/icons/description.svg';
import * as S from './styles';
import {IRowBoard} from '@models';
import {format} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import {Alert, Dimensions} from 'react-native';

interface ShowCardModalProps {
  isVisible: boolean;
  setIsVisible: Function;
  row: any;
  deleteCard?: (columnId, cardId) => void;
}

export const ShowCardModal = ({
  isVisible,
  setIsVisible,
  row,
  deleteCard,
}: ShowCardModalProps) => {
  const getTextPriority = priority => {
    if (priority === 1) {
      return 'Baixa';
    } else if (priority === 2) {
      return 'Alta';
    } else if (priority === 3) {
      return 'Crítica';
    }
  };
  console.log('aqui', row);

  return (
    <S.ModalView
      isVisible={isVisible}
      onBackButtonPress={() => setIsVisible(false)}
      onBackdropPress={() => setIsVisible(false)}>
      <S.Scroll>
        <S.ContainerModal>
          <S.Title>{row?.data?.title}</S.Title>
          <S.SubTitle>{row?.data?.description}</S.SubTitle>

          <S.Row>
            {row?.data?.date !== '' && (
              <S.WrapperText style={{marginRight: 5}}>
                <Calendar />
                <S.Text style={{textTransform: 'uppercase'}}>
                  {format(new Date(row?.data?.date), "dd MMM yyyy'", {
                    locale: pt,
                  })}
                </S.Text>
              </S.WrapperText>
            )}
            {row?.data?.where !== '' && (
              <S.WrapperText
                style={{
                  marginLeft: 5,
                  maxWidth: Dimensions.get('window').width * 0.34,
                }}>
                <Location />
                <S.Text numberOfLines={1} style={{paddingRight: 13}}>
                  {row?.data?.where}
                </S.Text>
              </S.WrapperText>
            )}
          </S.Row>

          <S.Row>
            {row?.data?.priority !== 0 && (
              <S.WrapperPriority priority={row?.data?.priority}>
                <S.TextPriority priority={row?.data?.priority}>
                  {getTextPriority(row?.data?.priority)}
                </S.TextPriority>
              </S.WrapperPriority>
            )}

            <S.Row
              style={{
                width: row?.data?.responsibles
                  ? 20 * row?.data?.responsibles.length
                  : 0,
                marginLeft: 10,
                marginRight: 10,
                position: 'relative',
              }}>
              {row?.data?.responsibles?.map((r, i) => {
                return (
                  <S.WrapperIconUser key={i} style={{left: i * 18}}>
                    <S.IconUser source={r.icon} />
                  </S.WrapperIconUser>
                );
              })}
            </S.Row>

            {row?.data?.description !== '' && (
              <S.Row>
                <Description />
              </S.Row>
            )}
          </S.Row>

          <S.ButtonDelete
            onPress={() => {
              Alert.alert('Apagar', 'Deseja apagar esse card?', [
                {
                  text: 'Cancelar',
                  onPress: () => 0,
                  style: 'cancel',
                },
                {
                  text: 'Apagar',
                  onPress: () => {
                    if (deleteCard) {
                      deleteCard(row?.columnId, row?.data?.id);
                    }
                  },
                },
              ]);
            }}>
            <S.TextButtonDelete>Arquivar e excluir</S.TextButtonDelete>
            {/* <Plus fill="#fff" /> */}
          </S.ButtonDelete>
        </S.ContainerModal>
      </S.Scroll>
    </S.ModalView>
  );
};
