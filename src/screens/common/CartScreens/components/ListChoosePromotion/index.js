import {Block, Text} from '../../../../../components';
import {theme} from '../../../../../theme';
import React, {useState} from 'react';
import {FlatList, Pressable, View} from 'react-native';
import {width} from '../../../../../utils/responsive';
import styles from './styles';

const DATA = [
  {
    id: 1,
    title: 'Personal Offer',
    code: 'MYPROMO',
    discount: 'Discount 10%',
    expiry: '3 Date',
  },
  {
    id: 2,
    title: 'Personal Offer',
    code: 'MYVISION',
    discount: 'Discount 10%',
    expiry: '5 Date',
  },
  {
    id: 3,
    title: 'Daily sale',
    code: 'SSAALLEE',
    discount: 'Discount 5%',
    expiry: '1 Date',
  },
  {
    id: 4,
    title: 'Free ship',
    code: 'MYPROMO',
    discount: 'Freeship',
    expiry: '1 week',
  },
];

const Item = ({item, index, onPress, backgroundColor, borderColor}) => {
  return (
    <Pressable
      onPress={onPress}
      key={index}
      style={[styles.container, backgroundColor]}>
      <View style={[styles.circleBox, borderColor]}>
        <Text center size={14} fontType={'bold'}>
          {item.discount}
        </Text>
      </View>
      <Block paddingBottom={8} width={width / 1.5} paddingHorizontal={10}>
        <Text paddingBottom={5} size={18} fontType={'bold'}>
          {item.title}
        </Text>
        <Text size={10} fontType={'heavy'}>
          Code: {item.code}
        </Text>
        <Text size={10} fontType={'heavy'}>
          Expiry: {item.expiry}
        </Text>
      </Block>
    </Pressable>
  );
};
const ListChoosePromotion = ({onPress}) => {
  const [selectedId, setSelectedId] = useState(null);

  const _renderItem = ({item}) => {
    const borderColor =
      item.id === selectedId ? theme.colors.black : theme.colors.gold;
    const backgroundColor =
      item.id === selectedId ? theme.colors.gold : theme.colors.white;

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        borderColor={{borderColor}}
        backgroundColor={{backgroundColor}}
      />
    );
  };

  return (
    <Block>
      <FlatList
        data={DATA}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={Platform.OS === 'ios' ? true : false}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </Block>
  );
};

export default ListChoosePromotion;
