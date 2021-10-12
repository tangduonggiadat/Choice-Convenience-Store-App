import {
  CartIcon,
  ChevronLeft,
  PinIcon,
  SettingIcon,
} from '../../assets/svg/common';
import {Block, Text} from '../../components';
import {routes} from '../../navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useIsFocused} from '@react-navigation/native';
import {theme} from '../../theme';
import {getSize, width} from '../../utils/responsive';
import React, {useState} from 'react';
import {Animated, Pressable, StatusBar} from 'react-native';
import {Badge} from 'react-native-elements';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';

const Header = props => {
  if (props.type === 'Infor') {
    return <HeaderInformation {...props} />;
  } else if (props.type === 'Title') {
    return <HeaderTitte {...props} />;
  } else {
    return <HeaderCommon {...props} />;
  }
};

const HeaderInformation = ({checkIcon, checkMargin, contentBottom}) => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  const AnimatedStatusBar = Animated.createAnimatedComponent(StatusBar);
  const HEADER_MAX_HEIGHT = getSize.m(200);
  const HEADER_MIN_HEIGHT = getSize.m(60);
  const [dark, setDark] = useState(true);
  const isStatus = dark ? 'dark-content' : 'light-content';

  return (
    <Block width={width}>
      <AnimatedStatusBar animated={true} translucent barStyle={isStatus} />
      <Animated.View
        style={{
          ...styles.container(top, checkMargin),
          maxheight: HEADER_MAX_HEIGHT,
          minHeight: HEADER_MIN_HEIGHT,
        }}>
        <Block
          row
          alignCenter
          marginBottom={10}
          paddingHorizontal={getSize.m(12)}
          space="between">
          <Block justifyCenter>
            <Text fontType={'bold'} size={18}>
              {' '}
              Garrick Dai
            </Text>
            <Block paddingHorizontal={5} paddingVertical={10} row alignCenter>
              <PinIcon />
              <Text size={12} paddingHorizontal={5}>
                3558 Arquint Rd, Vernon Center, NY 1344....
              </Text>
            </Block>
          </Block>
          {checkIcon ? <Setting /> : <Cart />}
        </Block>
        {contentBottom}
      </Animated.View>
    </Block>
  );
};

const HeaderCommon = ({canGoBack, content, checkBackground}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const AnimatedStatusBar = Animated.createAnimatedComponent(StatusBar);
  const [dark, setDark] = useState(true);
  const isStatus = dark ? 'dark-content' : 'light-content';

  return (
    <Block
      row
      width={width}
      alignCenter
      paddingTop={top + 15}
      paddingVertical={15}
      paddingHorizontal={1}
      backgroundColor={
        checkBackground ? theme.colors.white : theme.colors.background
      }>
      <AnimatedStatusBar
        animated={true}
        translucent
        barStyle={isStatus}
        backgroundColor={
          checkBackground ? theme.colors.white : theme.colors.background
        }
      />
      {isFocused && <StatusBar barStyle="dark-content" />}
      {canGoBack && (
        <Pressable onPress={() => navigation.goBack()}>
          <ChevronLeft />
        </Pressable>
      )}
      {content && <Block fex>{content}</Block>}
    </Block>
  );
};

const HeaderTitte = ({title, checkBackground, checkType}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  return (
    <Block
      row
      width={width}
      alignCenter
      paddingTop={top + 15}
      paddingVertical={10}
      paddingHorizontal={12}
      style={styles.border}
      backgroundColor={
        checkBackground ? theme.colors.white : theme.colors.background
      }>
      {isFocused && <StatusBar barStyle="dark-content" />}
      {title && (
        <Block flex paddingLeft={10}>
          <Text fontType={checkType ? 'bold' : 'regular'} size={18}>
            {title}
          </Text>
        </Block>
      )}
    </Block>
  );
};
const Cart = () => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate(routes.CARTSCREENS)}>
      <Block marginHorizontal={10}>
        <Badge
          status="warning"
          value="3"
          textStyle={{color: 'black'}}
          containerStyle={styles.containerStyle}
          textProps={{allowFontScaling: false}}
        />
        <CartIcon />
      </Block>
    </Pressable>
  );
};

const Setting = ({colorimg}) => {
  const navigation = useNavigation();
  return (
    <Pressable>
      <Block marginHorizontal={10}>
        <SettingIcon />
      </Block>
    </Pressable>
  );
};

export default Header;
