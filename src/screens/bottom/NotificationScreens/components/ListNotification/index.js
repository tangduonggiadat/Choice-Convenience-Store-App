import {Block, Text} from '../../../../../components';
import {theme} from '../../../../../theme';
import React, {useState} from 'react';
import {NotificationIcon} from '../../../../../assets/svg/common';
import {FlatList} from 'react-native';
import {width} from '../../../../../utils/responsive';
import style from './style';
import {Badge} from 'react-native-elements';

const DATA = [
  {
    id: '0',
    title: 'Offers on all products',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum eget turpis scelerisque blandit',
    date: '07:12 20-12-2020',
  },
  {
    id: '1',
    title: 'Offers on all products',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum eget turpis scelerisque blandit',
    date: '07:12 20-12-2020',
  },
  {
    id: '2',
    title: 'Offers on all products',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum eget turpis scelerisque blandit',
    date: '07:12 20-12-2020',
  },
];
const ListNotification = checkColor => {
  const _renderItem = React.useCallback(({item}) => {
    return (
      <Block
        style={style.container}
        radius={15}
        paddingVertical={20}
        paddingHorizontal={10}
        marginVertical={7}
        row
        backgroundColor={theme.colors.white}
        alignCenter>
        <Badge
          status={checkColor ? 'error' : ''}
          containerStyle={style.badge}
        />
        <NotificationIcon />
        <Block marginHorizontal={15} column alignStart>
          <Text size={16} fontType={'bold'}>
            {item.title}
          </Text>
          <Block paddingVertical={2} width={width - 90}>
            <Text size={12} color={theme.colors.hintText}>
              {item.content}...
            </Text>
          </Block>

          <Text size={12} color={theme.colors.darkGray}>
            {item.date}
          </Text>
        </Block>
      </Block>
    );
  }, []);
  const keyExtractor = React.useCallback((item, index) => String(index), []);

  const memoizedValue = React.useMemo(() => _renderItem, [DATA]);
  return (
    <Block marginVertical={10}>
      <FlatList
        data={DATA}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={Platform.OS === 'ios' ? true : false}
        keyExtractor={keyExtractor}
        renderItem={memoizedValue}
      />
    </Block>
  );
};

export default ListNotification;
