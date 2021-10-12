import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {bottom} from '../screens/bottom';
import {routes} from './routes';
import CustomTabBar from './CustomTabBar';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={routes.MAINSCREEN}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name={routes.HOMESCREEN}
        component={bottom.HOMESCREEN}
        options={{
          tabBarLabel: '.',
        }}
      />

      <Tab.Screen
        name={routes.SEARCHSCREEN}
        component={bottom.SEARCHSCREEN}
        options={{
          tabBarLabel: '.',
        }}
      />
      <Tab.Screen
        name={routes.NOTIFICATIONSCREEN}
        component={bottom.NOTIFICATIONSCREEN}
        options={{
          tabBarLabel: '.',
        }}
      />
      <Tab.Screen
        name={routes.PROFILESCREEN}
        component={bottom.PROFILESCREEN}
        options={{
          tabBarLabel: '.',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
