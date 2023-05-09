import {IBoard} from '@models';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';

import {RootState} from '@store';

const initialState: IBoard[] = [
  {
    id: '1',
    title: '',
    rows: [],
  },
];

const board = createSlice({
  name: '@BOARD',
  initialState,
  reducers: {
    changeStateBoard: (
      state = initialState,
      {payload}: PayloadAction<IBoard[]>,
    ) => {
      state = payload;

      return state;
    },

    resetStateBoard: () => initialState,
  },
});

export const {changeStateBoard, resetStateBoard} = board.actions;

export const boardSelector = (state: RootState) => state.board;

export default board.reducer;
