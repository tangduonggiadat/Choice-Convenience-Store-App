import {Block, Text} from '../../../../../components';
import {theme} from '../../../../../theme';
import React, {useState} from 'react';
import {ScrollView, Pressable} from 'react-native';
import styles from './styles';

const DATA = [
  {
    id: '0',
    title: 'Foods',
  },
  {
    id: '1',
    title: 'Drink',
  },
  {
    id: '2',
    title: 'Snack',
  },
  {
    id: '3',
    title: 'Prepareds',
  },
  {
    id: '4',
    title: 'Wine',
  },
  {
    id: '5',
    title: 'Sea Foods',
  },
];
const ListCategoryFilter = () => {
  const [selected, setSelected] = useState(' ');

  const _onPress = (item, index) => {
    setSelected(index);
  };
  const _renderItem = DATA?.map((item, index) => {
    return (
      <Pressable key={index} onPress={() => _onPress(item, index)}>
        <Block
          style={styles.container}
          backgroundColor={
            index === selected ? theme.colors.black : theme.colors.white
          }>
          <Text
            color={index === selected ? theme.colors.white : theme.colors.black}
            style={styles.textStyle}>
            {item.title}
          </Text>
        </Block>
      </Pressable>
    );
  });

  return (
    <Block paddingVertical={15}>
      <ScrollView
        horizontal
        nestedScrollEnabled={true}
        bounces={false}
        showsHorizontalScrollIndicator={false}>
        <Block row wrap alignCenter justifyCenter>
          {_renderItem}
        </Block>
      </ScrollView>
    </Block>
  );
};

export default ListCategoryFilter;
