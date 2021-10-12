import {theme} from '../../../../../theme';
import {Block} from '../../../../../components';
import React, {useState} from 'react';
import {FlatList, Text, Pressable, Image, View} from 'react-native';
import styles from './styles';
const DATA = [
  {
    id: 1,
    title: 'Cash',
  },
  {
    id: 2,
    img: require('../../../../../assets/images/card.png'),
  },
];

const Item = ({item, index, onPress, color, borderColor}) => {
  if (item.id === 1) {
    return (
      <Pressable key={index} style={styles.rbStyle} onPress={onPress}>
        <View style={[styles.titleStyle, borderColor]}>
          <Text style={[styles.text, color]}>{item.title}</Text>
        </View>
      </Pressable>
    );
  }
  return (
    <Pressable key={index} style={styles.rbStyle} onPress={onPress}>
      <View style={[styles.boximageStyle, borderColor]}>
        <Image style={styles.imageStyle} source={item.img} />
      </View>
    </Pressable>
  );
};
const PaymentMethod = () => {
  const [selected, setSelected] = useState(null);
  const _renderItem = ({item}) => {
    const color =
      item.id === selected ? theme.colors.black : theme.colors.hintText;
    const borderColor =
      item.id === selected ? theme.colors.black : theme.colors.white;

    return (
      <Item
        item={item}
        onPress={() => setSelected(item.id)}
        borderColor={{borderColor}}
        color={{color}}
      />
    );
  };

  return (
    <Block marginLeft={-10}>
      <FlatList
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={Platform.OS === 'ios' ? true : false}
        renderItem={_renderItem}
        keyExtractor={item => item.id}
        extraData={selected}
      />
    </Block>
  );
};

export default PaymentMethod;
