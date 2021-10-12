import {Block, Text} from '../../../../../components';
import {theme} from '../../../../../theme';
import React, {useState} from 'react';
import {FlatList, Image} from 'react-native';
import {width} from '../../../../../utils/responsive';

const DATA = [
  {
    id: 1,
    name: 'Potato Snack ',
    img: require('../../../../../assets/images/product1.png'),
    size: 'M',
    price: '$ 4.99',
    quantity: '1',
  },
  {
    id: 2,
    name: 'Potato Snack ',
    img: require('../../../../../assets/images/product2.png'),
    size: 'M',
    price: '$ 4.99',
    quantity: '1',
  },
  {
    id: 3,
    name: 'Potato Snack ',
    img: require('../../../../../assets/images/product3.png'),
    size: 'M',
    price: '$ 4.99',
    quantity: '1',
  },
  {
    id: 3,
    name: 'Potato Snack ',
    img: require('../../../../../assets/images/product3.png'),
    size: 'M',
    price: '$ 4.99',
    quantity: '1',
  },
];

const ListProductPayment = () => {
  const _renderItem = ({item, index}) => {
    return (
      <Block
        width={width - 100}
        borderColor={theme.colors.gray}
        borderWidth={1}
        radius={10}
        marginVertical={6}
        padding={5}>
        <Block alignCenter row>
          <Image style={{width: 82, height: 82}} source={item.img} />
          <Block>
            <Text size={15} fontType={'bold'}>
              {item.name}
            </Text>
            <Text size={15} paddingTop={10}>
              Size: {item.size}
            </Text>
          </Block>
          <Block alignEnd paddingHorizontal={15}>
            <Text
              paddingBottom={20}
              marginTop={-15}
              size={20}
              fontType={'bold'}>
              {item.price}
            </Text>
            <Text size={15}>Quantity: {item.quantity}</Text>
          </Block>
        </Block>
      </Block>
    );
  };

  const keyExtractor = React.useCallback((item, index) => String(index), []);

  const memoizedValue = React.useMemo(() => _renderItem, [DATA]);
  return (
    <Block alignCenter paddingVertical={6}>
      <FlatList
        data={DATA}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={Platform.OS === 'ios' ? true : false}
        renderItem={_renderItem}
        keyExtractor={keyExtractor}
        extraData={memoizedValue}
      />
    </Block>
  );
};

export default ListProductPayment;
