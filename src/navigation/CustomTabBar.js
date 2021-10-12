import {icons} from '../assets';
import React from 'react';
import {Block, Text} from '../components';
import {theme} from '../theme';
import {Image, Pressable, StyleSheet} from 'react-native';
import {Badge} from 'react-native-elements';
import {getSize} from '../utils/responsive';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const CustomTabBar = ({state, descriptors, navigation}) => {
  const {bottom} = useSafeAreaInsets();

  return (
    <Block
      row
      absolute
      backgroundColor={theme.colors.black}
      bottom={Platform.OS === 'ios' ? bottom : 20}
      right={getSize.s(20)}
      left={getSize.s(20)}
      radius={getSize.s(30)}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const icon =
          index === 0
            ? icons.home
            : index === 1
            ? icons.search
            : index === 2
            ? icons.notification
            : icons.profile;

        const iconselect =
          index === 0
            ? icons.homeselect
            : index === 1
            ? icons.searchselect
            : index === 2
            ? icons.notificationselect
            : icons.profileselect;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.btn}>
            {index === 2 && (
              <Badge
                status="warning"
                containerStyle={styles.containerStyle}
                textProps={{allowFontScaling: false}}
              />
            )}
            <Image
              source={isFocused ? iconselect : icon}
              style={styles.iconstyle(isFocused)}
            />
            <Text style={styles.textlabel(isFocused)}>{label}</Text>
          </Pressable>
        );
      })}
    </Block>
  );
};
export default CustomTabBar;

const styles = StyleSheet.create({
  btn: {flex: 1, alignItems: 'center', marginTop: 13, marginBottom: 5},
  textlabel: isFocused => ({
    color: isFocused ? theme.colors.gold : theme.colors.black,
    marginTop: getSize.s(-15),
    fontSize: getSize.s(20),
  }),
  iconstyle: (isFocused, config) => ({
    width: 25,
    height: 25,
    resizeMode: 'contain',
    tintColor: isFocused ? config : theme.colors.white,
  }),
  containerStyle: {
    position: 'absolute',
    zIndex: 10,
    top: getSize.s(-4),
    right: getSize.s(30),
  },
});
