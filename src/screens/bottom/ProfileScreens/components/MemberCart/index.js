import React from 'react';
import {images} from '../../../../../assets';
import {Block, Text} from '../../../../../components';
import {theme} from '../../../../../theme';
import {Image} from 'react-native';

const MemberCart = () => {
  return (
    <Block paddingBottom={20} alignCenter justifyCenter>
      <Block
        borderWidth={1.5}
        borderColor={theme.colors.gold}
        radius={20}
        paddingVertical={15}
        paddingHorizontal={10}
        backgroundColor={theme.colors.white}>
        <Block alignCenter row paddingBottom={65}>
          <Block alignStart paddingRight={46}>
            <Text fontType={'semibold'} size={20}>
              Garrick Dai
            </Text>
            <Text size={12}>Phone : 002-322-347</Text>
          </Block>
          <Image style={{width: 120, height: 48}} source={images.basecode} />
        </Block>
        <Block alignCenter>
          <Text size={16}>1 2 3 - 4 5 6 - 7 8 9 - 1 0 1 1 - 1 2 1</Text>
        </Block>
      </Block>
    </Block>
  );
};

export default MemberCart;
