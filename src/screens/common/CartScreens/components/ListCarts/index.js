import {Block, Text} from '../../../../../components';
import {theme} from '../../../../../theme';
import React, {useState} from 'react';
import {FlatList, Image, TouchableOpacity} from 'react-native';
import CustomRadioButton from '../RadioButton';
import {width} from '../../../../../utils/responsive';
import {DownIcon, UpIcon} from '../../../../../assets/svg/common';
import styles from './styles';
import CheckedBox from './components/CheckedBox';

const DATA = [
  {
    id: 1,
    name: 'Potato Snack',
    img: require('../../../../../assets/images/product1.png'),
    price: '$ 4.99',
    exp: '01/12/2020',
    fmg: '01/12/2021',
    discount: 'Discount',
  },
  {
    id: 2,
    name: 'Oreo Socola Wafer',
    img: require('../../../../../assets/images/product2.png'),
    price: '$ 7.00',
    exp: '10/10/2020',
    fmg: '10/10/2022',
  },
  {
    id: 3,
    name: 'Milk Socola',
    img: require('../../../../../assets/images/product3.png'),
    price: '$ 2.90',
    exp: '10/10/2020',
    fmg: '10/10/2022',
  },
];

const val = [
  {
    key: 'M',
    text: 'M',
  },
  {
    key: 'L',
    text: 'L',
  },
];

const ListCarts = () => {
  const _renderItem = ({item, index}) => {
    return (
      <Block
        key={item.id}
        row
        backgroundColor={theme.colors.white}
        style={styles.container}
        alignCenter
        marginHorizontal={10}
        radius={30}
        marginBottom={15}>
        <Block absolute right={15} top={10}>
          <Text color={theme.colors.red}>{item.discount}</Text>
        </Block>
        <Image
          style={{
            maxWidth: 180,
            maxHeight: 220,
            marginRight: -20,
          }}
          source={item.img}
        />

        <Block paddingTop={30}>
          <Text paddingBottom={5} fontType={'bold'} size={22}>
            {item.name}
          </Text>
          <Block row width={width / 2 + 5} alignCenter space={'between'}>
            <Block>
              <Text paddingBottom={4} size={13} color={theme.colors.hintText}>
                Exp: {item.exp}
              </Text>
              <Text paddingBottom={4} size={13} color={theme.colors.hintText}>
                Fmg: {item.fmg}
              </Text>
              <Block paddingTop={3} row>
                <Text size={13} color={theme.colors.hintText}>
                  Size:
                </Text>
                <CustomRadioButton PROP={val} />
              </Block>
            </Block>
            <Block alignCenter>
              <CheckedBox />
            </Block>
          </Block>
          <Block paddingTop={5} alignCenter row>
            <TouchableOpacity style={styles.rbStyle}>
              <UpIcon />
            </TouchableOpacity>

            <Text paddingHorizontal={10} size={16} fontType={'semibold'}>
              1
            </Text>
            <TouchableOpacity style={styles.rbStyle}>
              <DownIcon />
            </TouchableOpacity>
          </Block>
          <Block paddingBottom={10} alignEnd paddingRight={5}>
            <Text size={20} fontType={'bold'}>
              {item.price}
            </Text>
          </Block>
        </Block>
      </Block>
    );
  };

  const keyExtractor = React.useCallback((item, index) => String(index), []);

  const memoizedValue = React.useMemo(() => _renderItem, [DATA]);

  return (
    <Block>
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

export default ListCarts;
