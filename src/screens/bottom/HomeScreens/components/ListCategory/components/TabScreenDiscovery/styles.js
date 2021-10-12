import {theme} from '../../../../../../../theme';
import {StyleSheet} from 'react-native';
import {getSize} from '../../../../../../../utils/responsive';

export default StyleSheet.create({
  image: {
    width: getSize.s(120),
    height: getSize.s(120),
  },
  discountItem: {
    opacity: 0.85,
    borderTopStartRadius: 15,
    borderBottomEndRadius: 15,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: theme.colors.gold,
    alignItems: 'center',
  },
  lineSale: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: theme.colors.gold,
  },
});
