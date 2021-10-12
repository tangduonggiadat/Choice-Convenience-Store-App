import {Block, Text} from '../../../../../components';
import {theme} from '../../../../../theme';
import React from 'react';
import {ScrollView} from 'react-native';

const DATA = [
  {
    id: 1,
    title: 'Personal Offer',
    code: 'MYPROMO',
    discount: 'Discount 10%',
  },
  {
    id: 2,
    title: 'Personal Offer',
    code: 'MYPROMO',
    discount: 'Discount 10%',
  },
  {
    id: 5,
    title: 'Daily sale',
    code: 'SSAALLEE',
    discount: 'Discount 5%',
  },
  {
    id: 4,
    title: 'Free ship',
    code: 'MYPROMO',
    discount: 'Freeship',
  },
];

const ListPromotion = () => {
  let colors = [theme.colors.gold, theme.colors.black];
  const _renderItem = React.useCallback((item, index) => {
    return (
      <Block
        key={index}
        row
        borderColor={colors[index % colors.length]}
        borderWidth={1}
        alignCenter
        radius={20}
        paddingVertical={3}
        paddingHorizontal={7}
        marginRight={15}>
        <Block
          width={60}
          alignCenter
          justifyCenter
          radius={50}
          height={60}
          backgroundColor={theme.colors.gold}>
          <Text center size={12} fontType={'bold'}>
            {item.discount}
          </Text>
        </Block>
        <Block paddingHorizontal={5}>
          <Text size={16}>{item.title}</Text>
          <Text size={10} fontType={'bold'}>
            Code: {item.code}
          </Text>
        </Block>
      </Block>
    );
  }, []);

  return (
    <ScrollView
      horizontal
      marginRight={30}
      showsHorizontalScrollIndicator={false}>
      {DATA.map(_renderItem)}
    </ScrollView>
  );
};

export default ListPromotion;
