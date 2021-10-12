import React from 'react';
import {Block, Text, Button} from '../../../components';
import {theme} from '../../../theme';
import {Image, Pressable, StatusBar} from 'react-native';
import {images} from '../../../assets';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {height, width} from '../../../utils/responsive';
import {ChevronLeft} from '../../../assets/svg/common';
import {useNavigation} from '@react-navigation/native';
import InteractionBar from './components/InteractionBar';

const ProductDetail = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <Block flex alignCenter backgroundColor={theme.colors.background}>
      <StatusBar
        animated={true}
        translucent
        barStyle={'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <Block
        paddingTop={top + 5}
        marginHorizontal={20}
        backgroundColor={theme.colors.background}>
        <Image
          style={{width: width - 20, height: height / 2.5}}
          source={images.product1}
        />
        <Block absolute left={-7} top={top + 20}>
          <Pressable onPress={() => navigation.goBack()}>
            <ChevronLeft />
          </Pressable>
        </Block>
        <Block absolute right={15} top={top + 90} alignCenter column>
          <InteractionBar />
        </Block>
      </Block>
      <Block
        style={{borderTopEndRadius: 30, borderTopStartRadius: 30}}
        width={width}
        flex
        backgroundColor={theme.colors.white}>
        <Block
          style={{
            borderTopStartRadius: 15,
            borderBottomEndRadius: 15,
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: theme.colors.gold,
            alignItems: 'center',
          }}>
          <Text
            color={theme.colors.red}
            paddingHorizontal={20}
            paddingVertical={5}
            size={15}>
            Discount
          </Text>
        </Block>
        <Block alignCenter>
          <Text fontType={'bold'} paddingTop={top + 20} size={26}>
            Korean Potato Snack
          </Text>
        </Block>
        <Block paddingTop={20} marginHorizontal={20}>
          <Block alignCenter row space={'between'}>
            <Block>
              <Text
                size={15}
                color={theme.colors.hintText}
                paddingVertical={10}>
                EXP : {} 01/12/2021
              </Text>
              <Text
                size={15}
                color={theme.colors.hintText}
                paddingVertical={10}>
                FMG : {} 01/12/2020
              </Text>
            </Block>
            <Text size={15} color={theme.colors.hintText} paddingVertical={10}>
              Origin : Korean
            </Text>
          </Block>
          <Text size={15} color={theme.colors.hintText} paddingVertical={10}>
            Company: Korean GMD
          </Text>
          <Text size={15} color={theme.colors.hintText} paddingVertical={5}>
            Ingredients : Flour,Potato,Sugar,Salt,Fats,
            Calories,Preservative,...
          </Text>
        </Block>
        <Block
          alignCenter
          paddingHorizontal={20}
          paddingVertical={20}
          row
          space={'between'}>
          <Text size={15} color={theme.colors.hintText}>
            Total price:{' '}
          </Text>
          <Text fontType={'bold'} size={22}>
            $ 4.99
          </Text>
        </Block>
        <Block paddingVertical={5}>
          <Button
            height={45}
            title={'Add to card'}
            titleStyle={{fontSize: 16}}
          />
        </Block>
      </Block>
    </Block>
  );
};

export default ProductDetail;
