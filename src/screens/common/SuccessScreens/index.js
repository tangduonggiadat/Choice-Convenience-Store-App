import React, {useRef, useState} from 'react';
import {Block, Text, Button, Header} from '../../../components';
import {theme} from '../../../theme';
import {Pressable, Image, TouchableOpacity} from 'react-native';
import {height, width} from '../../../utils/responsive';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../../assets';
import {Thankyou} from '../../../assets/svg/common';
import {routes} from '../../../navigation/routes';

const SuccessScreens = () => {
  const navigation = useNavigation();

  return (
    <Block
      flex
      justifyCenter
      marginBottom={15}
      alignCenter
      backgroundColor={theme.colors.background}>
      <Header />

      <Block
        radius={20}
        alignCenter
        width={width - 30}
        height={height / 2 + 60}
        backgroundColor={theme.colors.white}>
        <Block absolute top={-64} paddingLeft={5}>
          <Image style={{width: 88, height: 88}} source={images.success} />
        </Block>
        <Block paddingTop={40} alignCenter>
          <Image style={{width: 140, height: 45}} source={images.logo} />
          <Block alignCenter marginTop={20}>
            <Thankyou />
          </Block>

          <Block alignCenter marginTop={20}>
            <Text size={18}>Your order has been completed.</Text>
            <Text size={18}>We will try to deliver as soon as possible</Text>
          </Block>
          <Block
            marginTop={30}
            paddingVertical={15}
            paddingHorizontal={30}
            width={width / 1.2}
            radius={20}
            borderColor={theme.colors.gold}
            borderWidth={1}>
            <Block paddingVertical={10} alignCenter row space={'between'}>
              <Text>Bill :</Text>
              <Text>00021010</Text>
            </Block>
            <Block paddingVertical={10} alignCenter row space={'between'}>
              <Text>Customer :</Text>
              <Text> Garrick Dai </Text>
            </Block>
            <Block paddingVertical={10} alignCenter row space={'between'}>
              <Text>Total Price :</Text>
              <Text>$ 13.9</Text>
            </Block>
            <Block paddingVertical={10} alignCenter row space={'between'}>
              <Text>Intent Time :</Text>
              <Text>10am - 2pm</Text>
            </Block>
          </Block>
        </Block>
      </Block>

      <Block absolute bottom={85}>
        <Button
          onPress={() => navigation.navigate(routes.BOTTOMTABBAR)}
          width={70}
          height={70}
          title="Done"
        />
      </Block>
    </Block>
  );
};

export default SuccessScreens;
