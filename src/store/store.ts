import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {Action, ThunkAction} from '@reduxjs/toolkit';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer, PersistConfig} from 'redux-persist';
import thunk from 'redux-thunk';

import boardReducer from './board';

const persistConfig: PersistConfig<any> = {
  key: 'BTIMETEST',
  storage: AsyncStorage,
  whitelist: [],
};

const rootReducer = combineReducers({
  board: boardReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}
