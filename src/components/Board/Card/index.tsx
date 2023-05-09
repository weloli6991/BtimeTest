import React from 'react';
import pt from 'date-fns/locale/pt-BR';

import Calendar from '@images/icons/calendar.svg';
import Location from '@images/icons/location.svg';
import Description from '@images/icons/description.svg';

import * as S from './styles';
import {format} from 'date-fns';
import {Dimensions} from 'react-native';
import {IRowBoard} from '@models';

interface CCardProps {
  item: IRowBoard;
}

export const CCard = ({item}: CCardProps) => {
  const getTextPriority = priority => {
    if (priority === 1) {
      return 'Baixa';
    } else if (priority === 2) {
      return 'Alta';
    } else if (priority === 3) {
      return 'Crítica';
    }
  };
  return (
    <S.Card
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 8,

        elevation: 5,
      }}>
      <S.Title numberOfLines={2}>{item?.title}</S.Title>
      <S.Row>
        {item.date !== '' && (
          <S.WrapperText style={{marginRight: 5}}>
            <Calendar />
            <S.Text style={{textTransform: 'uppercase'}}>
              {format(new Date(item.date), "dd MMM yyyy'", {
                locale: pt,
              })}
            </S.Text>
          </S.WrapperText>
        )}
        {item.where !== '' && (
          <S.WrapperText
            style={{
              marginLeft: 5,
              maxWidth: Dimensions.get('window').width * 0.34,
            }}>
            <Location />
            <S.Text numberOfLines={1} style={{paddingRight: 13}}>
              {item.where}
            </S.Text>
          </S.WrapperText>
        )}
      </S.Row>

      <S.Row>
        {item.priority !== 0 && (
          <S.WrapperPriority priority={item.priority}>
            <S.TextPriority priority={item.priority}>
              {getTextPriority(item.priority)}
            </S.TextPriority>
          </S.WrapperPriority>
        )}

        <S.Row
          style={{
            width: 20 * item.responsibles.length,
            marginLeft: 10,
            marginRight: 10,
            position: 'relative',
          }}>
          {item.responsibles.map((r, i) => {
            return (
              <S.WrapperIconUser key={i} style={{left: i * 18}}>
                <S.IconUser source={r.icon} />
              </S.WrapperIconUser>
            );
          })}
        </S.Row>

        {item.description !== '' && (
          <S.Row>
            <Description />
          </S.Row>
        )}
      </S.Row>
    </S.Card>
  );
};
