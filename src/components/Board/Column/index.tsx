import React, {useEffect} from 'react';
import Edit from '@images/icons/edit.svg';
import Delete from '@images/icons/delete.svg';
import Add from '@images/icons/plus.svg';
import * as S from './styles';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {CInputConfirm} from '@components/InputConfirm';
import {Alert} from 'react-native';

interface CColumnProps {
  item?: any;
  columnComponent?: any;
  layoutProps?: any;
  index?: any;
  addNewColumn?: boolean;
  addColumn?: () => void;
  updateColumn?: (columnId, data) => void;
  deleteColumn?: (columnId) => void;
  updateTitleColumns?: boolean;
  setUpdateTitleColumns?: (value) => void;
  addCard?: () => void;
}

export const CColumn = ({
  item,
  columnComponent,
  layoutProps,
  index,
  addNewColumn,
  addColumn,
  updateColumn,
  deleteColumn,
  updateTitleColumns,
  setUpdateTitleColumns,
  addCard,
}: CColumnProps) => {
  if ((item?.title !== '' || addNewColumn) && !updateTitleColumns) {
    return (
      <S.Column {...layoutProps}>
        {addNewColumn ? (
          <S.ButtonAdd
            onPress={() => {
              if (addColumn) {
                addColumn();
              }
            }}>
            <Add />
            <S.TextButtonAdd>Nova coluna</S.TextButtonAdd>
          </S.ButtonAdd>
        ) : (
          <>
            <S.Header>
              <S.Row>
                <S.Title numberOfLines={2}>{item.title}</S.Title>
                <S.Buttons>
                  <S.ButtonLeft
                    onPress={() => {
                      if (setUpdateTitleColumns) {
                        setUpdateTitleColumns(true);
                      }
                    }}
                    style={{
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.08,
                      shadowRadius: 8,

                      elevation: 1,
                    }}>
                    <Edit />
                  </S.ButtonLeft>
                  <S.ButtonRight
                    onPress={() => {
                      Alert.alert('Apagar', 'Deseja apagar essa coluna?', [
                        {
                          text: 'Cancelar',
                          onPress: () => 0,
                          style: 'cancel',
                        },
                        {
                          text: 'Apagar',
                          onPress: () => {
                            if (deleteColumn) {
                              deleteColumn(item.id);
                            }
                          },
                        },
                      ]);
                    }}
                    style={{
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.08,
                      shadowRadius: 8,

                      elevation: 1,
                    }}>
                    <Delete />
                  </S.ButtonRight>
                </S.Buttons>
              </S.Row>

              <S.Quantity>
                {item.rows.length > 0
                  ? `${item.rows.length} card(s)`
                  : 'Nenhum card ainda'}
              </S.Quantity>
            </S.Header>
            {columnComponent}
            <S.ButtonAdd
              onPress={() => {
                if (addCard) {
                  addCard();
                }
              }}>
              <Add />
              <S.TextButtonAdd>Novo card</S.TextButtonAdd>
            </S.ButtonAdd>
          </>
        )}
      </S.Column>
    );
  } else {
    const SchemaNewColumn = yup.object({
      title_column: yup.string().required('Campo obrigatório'),
    });

    const {handleSubmit, control, setValue} = useForm({
      resolver: yupResolver(SchemaNewColumn),
      mode: 'onChange',
    });

    useEffect(() => {
      setValue('title_column', item.title);
    }, []);

    const onSubmit = data => {
      if (updateColumn) {
        updateColumn(item.id, {title: data.title_column});
        if (setUpdateTitleColumns) {
          setUpdateTitleColumns(false);
        }
      }
    };

    const onError = errors => {
      console.log(errors);
    };

    return (
      <S.Column>
        <S.TitleNewColumn>Defina o nome desta coluna.</S.TitleNewColumn>
        <S.SubTitleNewColumn>
          Você poderá alterar este nome a qualquer momento, fica frio!
        </S.SubTitleNewColumn>

        <CInputConfirm
          name="title_column"
          control={control}
          placeholder="Ex. A fazer... To do..."
          onPress={handleSubmit(onSubmit, onError)}
        />
      </S.Column>
    );
  }
};
