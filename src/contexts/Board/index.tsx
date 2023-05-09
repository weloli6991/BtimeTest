import {IBoard} from '@models';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

interface BoardContextData {
  board: IBoard[];
  getBoards: () => IBoard[];
  updatedBoards: (data: IBoard[]) => void;
}

interface IBoardDocumentProps {
  children: ReactNode;
}

const BoardContext = createContext<BoardContextData>({} as BoardContextData);

export const BoardProvider = ({children}: IBoardDocumentProps) => {
  const [board, setBoard] = useState<IBoard[]>([]);

  const getBoards = () => {
    return board as IBoard[];
  };

  const updatedBoards = (data: IBoard[]) => {
    if (data.length === 0) {
      const start = [
        {
          id: '1',
          title: '',
          rows: [],
        },
      ];

      setBoard(start);
      AsyncStorage.setItem('board', JSON.stringify(start));
    } else {
      setBoard(data);
      AsyncStorage.setItem('board', JSON.stringify(data));
    }
  };

  useEffect(() => {
    start();
  }, []);

  const start = async () => {
    const _board = await AsyncStorage.getItem('board');

    if (_board) {
      setBoard(JSON.parse(_board));
    } else {
      const startBoard: IBoard[] = [
        {
          id: '1',
          title: '',
          rows: [],
        },
      ];
      AsyncStorage.setItem('board', JSON.stringify(startBoard));
      setBoard(startBoard);
    }
  };

  return (
    <BoardContext.Provider value={{board, getBoards, updatedBoards}}>
      {children}
    </BoardContext.Provider>
  );
};

export function useBoard() {
  const context = useContext(BoardContext);

  return context;
}
