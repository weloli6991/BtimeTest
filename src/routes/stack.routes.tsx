import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Empty, Home} from '@screens';
import {RootStackParamList} from './types';
import {getDataBoard} from '@mocks';
import {useSelector} from 'react-redux';
import {boardSelector} from '@store';
import {IBoard} from '@models';
import {useBoard} from '@contexts';

const Stack = createNativeStackNavigator();

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export const Routes = () => {
  const {board} = useBoard();

  const getInicial = () => {
    if (board.length > 0 && board[0].title !== '') {
      return 'Home';
    } else {
      return 'Empty';
    }
  };

  const PublicStackNavigation = (
    <Stack.Navigator initialRouteName={getInicial()}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Empty"
        component={Empty}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );

  const StackNavigation = () => {
    return PublicStackNavigation;
  };

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        {board.length > 0 && StackNavigation()}
      </NavigationContainer>
    </>
  );
};
