import React, {useRef, useState} from 'react';
import {Block, Text, Button, Header} from '../../../components';
import {theme} from '../../../theme';
import {Pressable, TouchableOpacity} from 'react-native';
import {width} from '../../../utils/responsive';
import {useNavigation} from '@react-navigation/native';
import {CloseIcon, PhoneIcon, PinIcon} from '../../../assets/svg/common';
import styles from './styles';
import ListProductPayment from './components/ListProductPayment';
import PaymentMethod from './components/PaymentMethod';
import {routes} from '../../../navigation/routes';

const PaymentScreens = () => {
  const navigation = useNavigation();

  return (
    <Block
      marginBottom={15}
      flex
      alignCenter
      backgroundColor={theme.colors.background}>
      <Header />

      <Block flex width={width - 30}>
        <Block
          style={styles.headerContainer}
          backgroundColor={theme.colors.white}
          paddingHorizontal={20}
          paddingVertical={10}>
          <Block absolute top={10} right={10}>
            <Pressable onPress={() => navigation.goBack()}>
              <CloseIcon />
            </Pressable>
          </Block>
          <Text fontType={'bold'} size={19}>
            {' '}
            Garrick Dai
          </Text>
          <Block paddingVertical={10} row alignCenter width={300}>
            <PinIcon />
            <Text size={12} paddingHorizontal={5}>
              3558 Arquint Rd, Vernon Center, NY 1344,New York City, United
              State
            </Text>
          </Block>
          <Block paddingVertical={10} row alignCenter>
            <PhoneIcon />
            <Text size={12} paddingHorizontal={5}>
              002-322-347
            </Text>
          </Block>
        </Block>
        <Block
          flex
          style={styles.listContainer}
          backgroundColor={theme.colors.white}>
          <ListProductPayment />
        </Block>
        <Block
          style={styles.footerContainer}
          paddingTop={3}
          backgroundColor={theme.colors.white}>
          <Block paddingTop={2} row space={'between'} marginHorizontal={20}>
            <Block>
              <Text paddingVertical={7} fontType={'bold'} size={15}>
                Promo :
              </Text>
              <Text paddingVertical={7} fontType={'bold'} size={15}>
                Delivery :
              </Text>
              <Text paddingVertical={7} fontType={'bold'} size={15}>
                Intent Time :
              </Text>
              <Text paddingVertical={7} fontType={'bold'} size={15}>
                Payment method
              </Text>
            </Block>
            <Block>
              <Text
                color={theme.colors.hintText}
                paddingVertical={7}
                fontType={'bold'}
                size={15}>
                Personal Offer-10%
              </Text>
              <Text
                color={theme.colors.hintText}
                paddingVertical={7}
                fontType={'bold'}
                size={15}>
                $ 0.5
              </Text>
              <Text
                color={theme.colors.hintText}
                paddingVertical={7}
                fontType={'bold'}
                size={15}>
                10am - 2pm
              </Text>
              <Block paddingTop={6} marginLeft={-5}>
                <PaymentMethod />
                <Block absolute top={6} left={45}>
                  <Text ontType={'bold'} size={15}>
                    |
                  </Text>
                </Block>
              </Block>
            </Block>
          </Block>
          <Block
            row
            alignCenter
            space={'between'}
            marginHorizontal={20}
            paddingTop={5}
            paddingBottom={15}>
            <Text size={17} fontType={'bold'}>
              Total Price :
            </Text>
            <Text size={23} fontType={'bold'}>
              $ 13.9{' '}
            </Text>
          </Block>

          <Block alignCenter paddingBottom={12}>
            <Button
              onPress={() => navigation.navigate(routes.SUCCESSSCREENS)}
              title="Payment"
              width={width - 65}
              height={48}
              titleStyle={{fontSize: 18}}
            />
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default PaymentScreens;
