import React, {useRef, useState} from 'react';
import {Block, Text, Header} from '../../../components';
import {theme} from '../../../theme';
import {Pressable, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {height, width} from '../../../utils/responsive';
import ListNotification from './components/ListNotification';

const TrendingScreen = () => {
  return (
    <Block flex alignCenter backgroundColor={theme.colors.white}>
      <Header type="Title" title={'Notification'} checkType checkBackground />
      <Block flex marginHorizontal={10}>
        <ListNotification />
      </Block>
    </Block>
  );
};

export default TrendingScreen;
