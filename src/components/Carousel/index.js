import {Block} from '../../components';
import {getSize, width} from '../../utils/responsive';
import React from 'react';
import {Image, Platform} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import styles from './styles';
import {theme} from '../../theme';

const data = [
  {
    id: '0',
    img: require('../../assets/images/banner1.jpg'),
  },
  {
    id: '1',
    img: require('../../assets/images/banner2.jpg'),
  },

  {
    id: '2',
    img: require('../../assets/images/banner3.jpg'),
  },
  {
    id: '3',
    img: require('../../assets/images/banner4.jpg'),
  },
  {
    id: '4',
    img: require('../../assets/images/banner5.jpg'),
  },
  {
    id: '5',
    img: require('../../assets/images/banner6.jpg'),
  },
];

const Carousel = () => {
  const _renderItem = React.useCallback(({item}) => {
    return (
      <Block
        backgroundColor={theme.colors.background}
        alignCenter
        paddingHorizontal={20}
        paddingTop={10}>
        <Image
          source={item.img}
          style={{
            borderRadius: 20,
            width: width - 40,
            height: width / 2,
          }}
        />
      </Block>
    );
  }, []);

  const keyExtractor = React.useCallback((item, index) => String(index), []);

  const memoizedValue = React.useMemo(() => _renderItem, [data]);

  return (
    <Block height={width / 1.8} backgroundColor={theme.colors.black}>
      <SwiperFlatList
        data={data}
        autoplay
        autoplayLoop
        index={3}
        autoplayDelay={3}
        keyExtractor={keyExtractor}
        renderItem={memoizedValue}
        updateCellsBatchingPeriod={30}
        initialNumToRender={6}
        disableVirtualization={false}
        windowSize={5}
        removeClippedSubviews={Platform.OS === 'ios' ? true : false}
        showPagination
        renderAll={true}
        showsHorizontalScrollIndicator={false}
        paginationStyleItem={{
          height: getSize.v(7),
          width: getSize.v(7),
          marginHorizontal: 3,
        }}
        paginationDefaultColor={theme.colors.darkGray}
        paginationActiveColor={theme.colors.black}
        paginationStyle={styles.paginationStyle}
      />
    </Block>
  );
};

export default Carousel;
