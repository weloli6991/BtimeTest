import React from 'react';
import {Routes} from '@routes';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persistor, store} from '@store';
import 'react-native-gesture-handler';
import {BoardProvider} from '@contexts';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BoardProvider>
          <Routes />
        </BoardProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
