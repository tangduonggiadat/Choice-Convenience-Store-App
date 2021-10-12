import {Block, Text} from '../../../../../../../components';
import {theme} from '../../../../../../../theme';
import React from 'react';
import {FlatList, Image, Pressable} from 'react-native';
import {HeartFuture} from '../../../../../../../assets/svg/common';
import {useNavigation} from '@react-navigation/core';
import {routes} from '../../../../../../../navigation/routes';

const DATA = [
  {
    id: 1,
    name: 'Hamberger',
    description: 'Beef,Salad,Tomato,...',
    price: '$ 5.59',
    numfav: '120',
    img: require('../../../../../../../assets/images/feature1.png'),
  },
  {
    id: 2,
    name: 'Mango Soda',
    description: 'Calories,Sugar,Jam,...',
    price: '$ 2.59',
    numfav: '98',
    img: require('../../../../../../../assets/images/feature2.png'),
  },
  {
    id: 3,
    name: 'Pudding Bananas',
    description: 'Calories,Sugar,Pudding,...',
    price: '$ 3.00',
    numfav: '76',
    img: require('../../../../../../../assets/images/feature3.png'),
  },
  {
    id: 4,
    name: 'Pineapple Soda',
    description: 'Calories,Sugar,Jam,...',
    price: '$ 7.99',
    numfav: '200',
    img: require('../../../../../../../assets/images/feature4.png'),
  },
  {
    id: 5,
    name: 'M&M Socola',
    description: 'Calories,Sugar,Socola,...',
    price: '$ 1.99',
    numfav: '54',
    img: require('../../../../../../../assets/images/feature5.png'),
  },
];

const ListFeature = () => {
  const navigation = useNavigation();
  const _renderItem = React.useCallback(({item}) => {
    return (
      <Pressable onPress={() => navigation.navigate(routes.PRODUCTDETAIL)}>
        <Block
          row
          backgroundColor={theme.colors.white}
          alignCenter
          elevation={5}
          radius={15}
          paddingLeft={5}
          paddingRight={7}
          marginRight={20}>
          <Block
            backgroundColor={theme.colors.yellow}
            alignCenter
            radius={30}
            marginVertical={5}>
            <Image
              source={item.img}
              style={{
                width: 60,
                borderRadius: 60,
                height: 60,
              }}
            />
          </Block>
          <Block
            opacity={0.85}
            radius={5}
            absolute
            top={5}
            left={5}
            backgroundColor={theme.colors.gold}
            alignCenter>
            <Text paddingHorizontal={4} paddingVertical={2} size={8}>
              Best Saler
            </Text>
          </Block>
          <Block marginRight={5} paddingVertical={5} paddingHorizontal={5}>
            <Text paddingBottom={5} size={18}>
              {item.name}
            </Text>
            <Text color={theme.colors.hintText} paddingBottom={10} size={12}>
              {item.description}
            </Text>
          </Block>
          <Block alignEnd>
            <Block marginBottom={10} alignCenter>
              <HeartFuture />
              <Text paddingTop={1} color={theme.colors.hintText} size={10}>
                {item.numfav}
              </Text>
            </Block>
            <Text marginTop={5} size={15} fontType={'bold'}>
              {item.price}
            </Text>
          </Block>
        </Block>
      </Pressable>
    );
  }, []);

  const keyExtractor = React.useCallback((item, index) => String(index), []);

  const memoizedValue = React.useMemo(() => _renderItem, [DATA]);

  return (
    <Block>
      <FlatList
        data={DATA}
        horizontal
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={Platform.OS === 'ios' ? true : false}
        keyExtractor={keyExtractor}
        renderItem={memoizedValue}
      />
    </Block>
  );
};

export default ListFeature;
