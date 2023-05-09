import React, {useEffect, useMemo, useState} from 'react';
import {Dimensions, Text} from 'react-native';
import _ from 'lodash';

import Background from '@images/background.png';
import Logo from '@images/icons/logo.svg';

import {Control, Controller} from 'react-hook-form';
import {Repository} from 'react-native-dnd-board';

import {getDataBoard} from '@mocks';

import * as S from './styles';
import {addCard, addColumn, updateCard, updateColumn} from '@utils';
import {CColumn} from './Column';
import {CCard} from './Card';
import {IBoard, IResponsiblesBoard, IRowBoard} from '@models';
import {AddCardModal} from './Card/AddCardModal';
import {SelectResponsiblesModal} from './Card/SelectResponsiblesModal';
import {SelectPriorityModal} from './Card/SelectPriorityModal';
import {ShowCardModal} from './Card/ShowCardModal';
import {useBoard} from '@contexts';

interface IBoardProps {
  search: string;
}

export const CBoard = ({search}: IBoardProps) => {
  const {board, getBoards, updatedBoards} = useBoard();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isVisibleResponsibles, setIsVisibleResponsibles] =
    useState<boolean>(false);
  const [isVisiblePriority, setIsVisiblePriority] = useState<boolean>(false);
  const [isVisibleShow, setIsVisibleShow] = useState<boolean>(false);
  const [responsiblesSelect, setResponsiblesSelect] = useState<
    IResponsiblesBoard[]
  >([]);
  const [prioritySelect, setPrioritySelect] = useState<0 | 1 | 2 | 3>(0);
  const [column, setColumn] = useState<any>();
  const [row, setRow] = useState<any>();
  const [dataBoardLength, setDataBoardLength] = useState(0);
  const [dataBoardRowLength, setDataBoardRowLength] = useState([]);
  const [updateTitleColumns, setUpdateTitleColumns] = useState(false);
  const [dataBoard, setDataBoard] = useState<IBoard[]>(board);
  const [dataBoardSearch, setDataBoardSearch] = useState<IBoard[]>(dataBoard);

  useEffect(() => {
    updateLength();
  }, [dataBoardSearch]);

  useEffect(() => {
    filterSearch(search);
  }, [search]);

  const filterSearch = _search => {
    if (_search) {
      _search = search.toLowerCase();
      let _dataBoardSearch = [...dataBoard];
      _dataBoardSearch.map((r, i) => {
        const _row = r.rows.filter((r2, i2) => {
          if (r2.title.toLowerCase().indexOf(_search) !== -1) {
            return true;
          } else {
            return false;
          }
        });
        _dataBoardSearch[i].rows = _row;
      });
      setDataBoardSearch(_dataBoardSearch);
      setRepository(new Repository(_dataBoardSearch));
    } else {
      setDataBoardSearch(dataBoard);
      setRepository(new Repository(dataBoard));
    }
  };

  const updateLength = () => {
    setDataBoardLength(dataBoardSearch.length);
    dataBoardSearch.forEach(column => {
      dataBoardRowLength[column.id] = column.rows.length;
    });
  };

  const COLUMN_WIDTH = Dimensions.get('window').width * 0.8;

  const [repository, setRepository] = useState(new Repository(dataBoardSearch));

  const addCardModal = column => {
    setColumn(column);
    setIsVisible(true);
  };

  const _addCard = (columnId, row) => {
    let _dataBoard: IBoard[] = [...dataBoard];

    const columnIndex = _dataBoard.findIndex(column => column.id === columnId);
    if (columnIndex > -1) {
      _dataBoard[columnIndex].rows.push(
        addCard(columnId, repository, dataBoardRowLength, row),
      );
    }

    updatedBoards(_dataBoard);
    setDataBoard(_dataBoard);

    setDataBoardSearch(_dataBoard);

    setRepository(new Repository(_dataBoard));

    setIsVisible(false);
  };

  const _updateCard = (cardId, data) => {
    repository.updateRow(cardId, updateCard(data));
  };

  const deleteCard = (columnId, cardId) => {
    let _dataBoard: IBoard[] = [...dataBoard];

    const columnIndex = _dataBoard.findIndex(column => column.id === columnId);

    if (columnIndex > -1) {
      const _rows = _dataBoard[columnIndex].rows.filter(
        (r, i) => r.id !== cardId,
      );
      _dataBoard[columnIndex].rows = _rows;
    }

    updatedBoards(_dataBoard);
    setDataBoard(_dataBoard);

    setDataBoardSearch(_dataBoard);
    setRepository(new Repository(_dataBoard));
    setIsVisibleShow(false);
  };

  const renderCard = ({item}) => {
    return <CCard item={item} />;
  };

  const _addColumn = () => {
    const column = addColumn(dataBoardRowLength, dataBoardLength);
    let _dataBoard = [...dataBoard];
    console.log('_dataBoard', _dataBoard);
    _dataBoard.push(column);

    console.log('_dataBoard2', _dataBoard);

    updatedBoards(_dataBoard);
    setDataBoard(_dataBoard);

    setDataBoardSearch(_dataBoard);

    setRepository(new Repository(_dataBoard));
  };

  const _updateColumn = (columnId, data) => {
    const _dataBoard = updateColumn(data, [...dataBoard], columnId);

    updatedBoards(_dataBoard);
    setDataBoard(_dataBoard);

    setDataBoardSearch(_dataBoard);

    setRepository(new Repository(_dataBoard));
  };

  const deleteColumn = columnId => {
    const _dataBoard = [...dataBoard].filter((r, i) => r.id !== columnId);
    updatedBoards(_dataBoard);
    setDataBoard(_dataBoard);

    setDataBoardSearch(_dataBoard);
    setRepository(new Repository(_dataBoard));
  };

  const renderColumn = useMemo(
    () =>
      ({item, columnComponent, layoutProps, index}) => {
        return (
          <CColumn
            item={item}
            columnComponent={columnComponent}
            layoutProps={layoutProps}
            index={index}
            updateColumn={(columnId, data) => _updateColumn(columnId, data)}
            deleteColumn={columnId => deleteColumn(columnId)}
            updateTitleColumns={updateTitleColumns}
            setUpdateTitleColumns={value => setUpdateTitleColumns(value)}
            addCard={() => addCardModal(item)}
          />
        );
      },
    [dataBoardLength, updateTitleColumns, setUpdateTitleColumns],
  );

  const onCardPress = (card: IRowBoard) => {
    setRow(card);
    setIsVisibleShow(true);
  };

  const onDragEnd = (fromColumnId, toColumnId, card) => {
    //
  };

  if (dataBoardSearch.length > 0) {
    return (
      <>
        <S.CBoard
          repository={repository}
          renderRow={renderCard}
          renderColumnWrapper={renderColumn}
          onRowPress={onCardPress}
          onDragEnd={onDragEnd}
          columnWidth={COLUMN_WIDTH}
          accessoryRight={
            <CColumn
              item={{}}
              columnComponent={{}}
              layoutProps={{}}
              index={{}}
              addNewColumn={true}
              addColumn={() => _addColumn()}
            />
          }
        />

        <AddCardModal
          isVisible={isVisible}
          setIsVisible={setIsVisible}
          setIsVisibleResponsibles={setIsVisibleResponsibles}
          setIsVisiblePriority={setIsVisiblePriority}
          responsiblesSelect={responsiblesSelect}
          prioritySelect={prioritySelect}
          column={column}
          addCard={(columnId, row) => _addCard(columnId, row)}
        />
        <SelectResponsiblesModal
          isVisible={isVisibleResponsibles}
          setIsVisible={setIsVisibleResponsibles}
          setIsVisibleAddCard={setIsVisible}
          responsiblesSelect={responsiblesSelect}
          setResponsiblesSelect={setResponsiblesSelect}
        />
        <SelectPriorityModal
          isVisible={isVisiblePriority}
          setIsVisible={setIsVisiblePriority}
          setIsVisibleAddCard={setIsVisible}
          prioritySelect={prioritySelect}
          setPrioritySelect={setPrioritySelect}
        />
        {row?.data?.title && (
          <ShowCardModal
            isVisible={isVisibleShow}
            setIsVisible={setIsVisibleShow}
            row={row}
            deleteCard={(columnId, cardId) => deleteCard(columnId, cardId)}
          />
        )}
      </>
    );
  } else {
    return (
      <S.Wrapper>
        <CColumn addNewColumn={true} addColumn={() => _addColumn()} />
      </S.Wrapper>
    );
  }
};
