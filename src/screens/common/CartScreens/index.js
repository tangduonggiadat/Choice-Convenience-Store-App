import React, {useRef} from 'react';
import {Block, Text, Button, Header} from '../../../components';
import {theme} from '../../../theme';
import {TextInput, Image, Pressable, ScrollView} from 'react-native';
import {images} from '../../../assets';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {height, width} from '../../../utils/responsive';
import {useNavigation} from '@react-navigation/native';
import ListPromotion from './components/ListPromotion';
import ListCarts from './components/ListCarts';
import RBSheet from 'react-native-raw-bottom-sheet';
import styles from './styles';
import ListChoosePromotion from './components/ListChoosePromotion';
import {routes} from '../../../navigation/routes';

const CartScreens = () => {
  const {top} = useSafeAreaInsets();
  const refRBSheet = useRef();
  const navigation = useNavigation();
  return (
    <Block flex alignCenter backgroundColor={theme.colors.background}>
      <Header canGoBack content={<ListPromotion />} />
      <Block flex paddingTop={6}>
        <ListCarts />
      </Block>

      <Block
        style={styles.bottomContainer}
        width={width}
        alignCenter
        backgroundColor={theme.colors.white}>
        <Block width={width - 40} paddingTop={25}>
          <Block row alignCenter>
            <TextInput
              placeholder="Enter promo code..."
              style={styles.inputStyle}
            />
            <Pressable onPress={() => refRBSheet.current.open()}>
              <Block
                alignCenter
                justifyCenter
                backgroundColor={theme.colors.black}
                width={49}
                height={49}
                radius={50}>
                <Image source={images.upIcon} style={styles.imageStyle} />
              </Block>
            </Pressable>
          </Block>

          <Block paddingTop={15} alignCenter row space="between">
            <Text size={16} fontType={'semibold'}>
              Total Price:
            </Text>
            <Text size={24} fontType={'bold'}>
              $ 4.99
            </Text>
          </Block>
          <Block alignCenter padding={15}>
            <Button
              onPress={() => navigation.navigate(routes.PAYMENTSCREENS)}
              width={width - 40}
              height={50}
              title="Check out"
              titleStyle={{fontSize: 18}}
            />
          </Block>
        </Block>
      </Block>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        dragFromTopOnly={true}
        duration={250}
        customStyles={{
          draggableIcon: {
            backgroundColor: theme.colors.black,
            width: 100,
            height: 2,
          },
          container: {
            height: '35.5%',
            backgroundColor: theme.colors.white,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}>
        <Block paddingHorizontal={20} marginBottom={85}>
          <Text paddingBottom={5} size={18} fontType={'bold'}>
            Promo Code
          </Text>
          <Block absolute top={0} right={20}>
            <Pressable onPress={() => refRBSheet.current.close()}>
              <Text size={15} fontType={'bold'}>
                Pick up
              </Text>
            </Pressable>
          </Block>
          <ListChoosePromotion />
        </Block>
      </RBSheet>
    </Block>
  );
};

export default CartScreens;
