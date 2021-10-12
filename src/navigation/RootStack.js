import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigation from './BottomTabNavigation';
import {navigate} from './RootNavigation';
import {routes} from './routes';
import {common} from '../screens/common';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer ref={navigate}>
      <StatusBar translucent barStyle="dark-content" backgroundColor="white" />
      <Stack.Navigator
        initialRouteName={routes.BOTTOMTABBAR}
        screenOptions={{
          mode: 'modal',
          headerShown: false,
        }}>
        <Stack.Screen
          name={routes.BOTTOMTABBAR}
          component={BottomTabNavigation}
        />
        <Stack.Screen
          name={routes.PRODUCTDETAIL}
          component={common.PRODUCTDETAIL}
        />
        <Stack.Screen
          name={routes.CARTSCREENS}
          component={common.CARTSCREENS}
        />
        <Stack.Screen
          name={routes.PAYMENTSCREENS}
          component={common.PAYMENTSCREENS}
        />
        <Stack.Screen
          name={routes.SUCCESSSCREENS}
          component={common.SUCCESSSCREENS}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
