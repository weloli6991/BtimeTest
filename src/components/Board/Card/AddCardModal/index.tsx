import React from 'react';

import * as S from './styles';
import {CInput} from '@components/Input';
import {useForm} from 'react-hook-form';
import Plus from '@images/icons/plus.svg';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {CTextArea} from '@components/TextArea';
import {IResponsiblesBoard} from '@models';

interface AddCardModalProps {
  isVisible: boolean;
  setIsVisible: Function;
  setIsVisibleResponsibles: Function;
  setIsVisiblePriority: Function;
  responsiblesSelect: IResponsiblesBoard[];
  prioritySelect: 0 | 1 | 2 | 3;
  column: any;
  addCard?: (columnId, row) => void;
}

export const AddCardModal = ({
  isVisible,
  setIsVisible,
  setIsVisibleResponsibles,
  setIsVisiblePriority,
  responsiblesSelect,
  prioritySelect,
  column,
  addCard,
}: AddCardModalProps) => {
  const getNameResponsibles = () => {
    if (responsiblesSelect.length > 0) {
      const names: string[] = [];
      responsiblesSelect.map((r, i) => {
        names.push(r.name);
      });

      return names.join(', ');
    } else {
      return 'Responsáveis';
    }
  };

  const getTextPriority = priority => {
    if (priority === 1) {
      return 'Baixa';
    } else if (priority === 2) {
      return 'Alta';
    } else if (priority === 3) {
      return 'Crítica';
    } else {
      return 'Prioridade';
    }
  };

  const SchemaNewColumn = yup.object({
    title: yup.string().required('Campo obrigatório'),
  });

  const {handleSubmit, control, setValue, reset} = useForm({
    resolver: yupResolver(SchemaNewColumn),
    mode: 'onChange',
  });

  const onSubmit = data => {
    const _data = {
      title: data.title,
      date: data.date ? data.date.split('/').reverse().join('-') : '',
      where: data.where ? data.where : '',
      priority: prioritySelect ? prioritySelect : 0,
      responsibles: responsiblesSelect,
      description: data.description ? data.description : '',
    };

    if (addCard) {
      addCard(column.id, _data);
      reset();
    }
  };

  const onError = errors => {
    console.log(errors);
  };

  return (
    <S.ModalView
      isVisible={isVisible}
      onBackButtonPress={() => setIsVisible(false)}
      onBackdropPress={() => setIsVisible(false)}>
      <S.Scroll>
        <S.ContainerModal>
          <S.ButtonClose onPress={() => setIsVisible(false)}>
            <Plus rotation={45} width={30} height={30} />
          </S.ButtonClose>
          <S.Title>Novo card em {column?.title}</S.Title>
          <CInput name="title" control={control} placeholder="Nome do card" />
          <CTextArea
            name="description"
            control={control}
            placeholder="Descrição"
          />
          <CInput
            name="where"
            control={control}
            placeholder="Local de execução"
          />

          <S.View>
            <S.ViewButton
              onPress={() => {
                setIsVisible(false);

                setTimeout(() => {
                  setIsVisibleResponsibles(true);
                }, 700);
              }}
            />
            <CInput
              name="responsibles"
              control={control}
              placeholder={getNameResponsibles()}
              editable={false}
            />
          </S.View>

          <S.View>
            <S.ViewButton
              onPress={() => {
                setIsVisible(false);

                setTimeout(() => {
                  setIsVisiblePriority(true);
                }, 700);
              }}
            />
            <CInput
              name="priority"
              control={control}
              placeholder={getTextPriority(prioritySelect)}
              editable={false}
            />
          </S.View>

          <CInput
            name="date"
            control={control}
            placeholder="Defina uma data"
            mask={true}
            type="custom"
            options={{
              mask: '99/99/9999',
            }}
          />

          <S.Button onPress={handleSubmit(onSubmit, onError)}>
            <S.TextButton>Criar</S.TextButton>
            <Plus fill="#fff" />
          </S.Button>
        </S.ContainerModal>
      </S.Scroll>
    </S.ModalView>
  );
};
