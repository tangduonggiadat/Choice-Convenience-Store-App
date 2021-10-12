import React, {useState} from 'react';
import {Block, Text} from '../../../../../components';
import {theme} from '../../../../../theme';
import {Animated} from 'react-native';
import ListCategoryFilter from '../ListCategoryFilter';
import {Slider} from 'react-native-elements';
import ListExpiry from '../ListExpiry';

const BottomSheet = () => {
  const [value, setValue] = useState('');
  return (
    <Block flex paddingVertical={20} paddingLeft={20}>
      <Block>
        <Text fontType={'bold'} size={15}>
          Category
        </Text>
        <Block>
          <ListCategoryFilter />
        </Block>
        <Text fontType={'bold'} size={15}>
          Price
        </Text>
        <Block>
          <Block absolute top={-15} right={10}>
            <Text fontType={'bold'} size={14}>
              {'$ '}
              {value}
            </Text>
          </Block>
          <Slider
            value={value}
            onValueChange={setValue}
            maximumValue={100}
            minimumValue={0}
            step={1}
            minimumTrackTintColor={theme.colors.gold}
            maximumTrackTintColor={theme.colors.black}
            trackStyle={{
              height: 5,
              borderRadius: 5,
            }}
            thumbProps={{
              Component: Animated.Image,
              source: {
                uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              },
            }}
            thumbStyle={{
              height: 15,
              width: 15,
              backgroundColor: theme.colors.gold,
            }}
            style={{
              paddingHorizontal: 10,
            }}
          />
          <Block absolute top={26} left={0}>
            <Text size={12}>$ 0</Text>
          </Block>
          <Block absolute top={26} right={10}>
            <Text size={12}>$ 100</Text>
          </Block>
          <Text paddingTop={15} fontType={'bold'} size={15}>
            Expiry
          </Text>
          <Block>
            <ListExpiry />
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default BottomSheet;
