import {IBoard} from '@models';

export const addCard = (columnId, repository, dataBoardRowLength, row) => {
  row.id = `${columnId}${++dataBoardRowLength[columnId]}`;

  return row;
};

export const updateCard = data => {
  const dummy = data || {title: 'Row updated'};

  return dummy;
};

export const addColumn = (dataBoardRowLength, dataBoardLength) => {
  dataBoardRowLength[++dataBoardLength] = 0;
  const column = {
    id: `${dataBoardLength}`,
    title: ``,
    rows: [],
  };

  return column;
};

export const updateColumn = (data, dataBoard, columnId) => {
  const dummy = data || {title: 'Column name updated'};

  // Call api update column here
  const columnIndex = dataBoard.findIndex(column => column.id === columnId);
  if (columnIndex > -1) {
    dataBoard[columnIndex].title = dummy.title;
  }

  return dataBoard;
};
