import {Block, Text} from '../../../../../components';
import React from 'react';
import {FlatList, Image, Pressable} from 'react-native';
import {theme} from '../../../../../theme';
import styles from './styles';
import {AddCart, HeartIcon} from '../../../../../assets/svg/common';
import {getSize, width} from '../../../../../utils/responsive';
import {useNavigation} from '@react-navigation/native';
import {routes} from '../../../../../navigation/routes';

const data = [
  {
    id: 0,
    name: 'Potato Snack',
    discription: 'Salt,Tomato,Flour,..',
    OrgPrice: '$ 5.99',
    price: '$ 4.99',
    numFav: '19',
    img: require('../../../../../assets/images/product1.png'),
  },
  {
    id: 1,
    name: 'Oreo Socola Wafer',
    discription: 'Socola,Flour,Sugar,...',
    OrgPrice: '',
    price: '$ 7.00',
    numFav: '40',
    img: require('../../../../../assets/images/product2.png'),
  },
  {
    id: 2,
    name: 'Balck Socola',
    discription: 'Salt,Tomato,Flour,..',
    OrgPrice: '',
    price: '$ 4.99',
    numFav: '22',
    img: require('../../../../../assets/images/product3.png'),
  },
  {
    id: 3,
    name: 'Cup Noodle',
    discription: 'Salt,Tomato,Flour,..',
    OrgPrice: '$ 5.99',
    price: '$ 4.99',
    numFav: '10',
    img: require('../../../../../assets/images/product4.png'),
  },
  {
    id: 4,
    name: 'Ice Cream',
    discription: 'Salt,Tomato,Flour,..',
    OrgPrice: '',
    price: '$ 4.99',
    numFav: '19',
    img: require('../../../../../assets/images/product5.png'),
  },
];

const numColumns = 2;
const ListSearchResult = () => {
  const fomatData = (data, numColumns) => {
    const totalRows = Math.floor(data.length / numColumns);
    let totalLastRows = data.length - totalRows * numColumns;
    while (totalLastRows !== numColumns && totalLastRows !== 0) {
      data.push({id: 'blank-${numOfElementsLastRow}', empty: true});
      totalLastRows++;
    }
    return data;
  };
  const navigation = useNavigation();
  const _renderItem = React.useCallback(({item}) => {
    if (item.empty == true) {
      return <Block flex backgroundColor={theme.colors.background}></Block>;
    }
    return (
      <Block
        flex
        backgroundColor={theme.colors.white}
        radius={15}
        elevation={5}
        paddingBottom={10}
        marginVertical={7}
        marginHorizontal={7}>
        <Pressable onPress={() => navigation.navigate(routes.PRODUCTDETAIL)}>
          <Block justifyCenter alignCenter>
            <Image style={styles.image} source={item.img} />
            <Block style={styles.discountItem}>
              <Text
                color={theme.colors.red}
                paddingHorizontal={8}
                paddingVertical={4}
                size={12}>
                Discount
              </Text>
            </Block>
            <Block absolute top={10} right={10} marginBottom={10} alignCenter>
              <HeartIcon />
              <Text paddingTop={1} color={theme.colors.hintText} size={10}>
                {item.numFav}
              </Text>
            </Block>
            <Text paddingBottom={5} size={18}>
              {item.name}
            </Text>
            <Text size={13} color={theme.colors.hintText}>
              {item.discription}
            </Text>
            <Text
              style={styles.lineSale}
              paddingBottom={2}
              size={13}
              color={theme.colors.hintText}>
              {item.OrgPrice}
            </Text>
            <Block paddingLeft={50} row>
              <Text marginRight={25} size={18}>
                {item.price}
              </Text>
              <Block>
                <AddCart />
              </Block>
            </Block>
          </Block>
        </Pressable>
      </Block>
    );
  }, []);

  const keyExtractor = React.useCallback((item, index) => String(index), []);

  const memoizedValue = React.useMemo(() => _renderItem, [data]);

  return (
    <Block
      flex
      marginHorizontal={10}
      marginTop={10}
      marginBottom={getSize.v(75)}
      justifyCenter>
      <FlatList
        data={fomatData(data, numColumns)}
        removeClippedSubviews={Platform.OS === 'ios' ? true : false}
        keyExtractor={keyExtractor}
        renderItem={memoizedValue}
        showsVerticalScrollIndicator={false}
        numColumns={numColumns}
        disableVirtualization={false}
      />
    </Block>
  );
};

export default ListSearchResult;
