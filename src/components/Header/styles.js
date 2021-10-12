import {theme} from '../../theme';
import {getSize, width} from '../../utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    zIndex: 1,
    top: getSize.m(-7),
    right: getSize.m(-10),
  },

  container: (top, checkMargin) => ({
    paddingTop: top + 15,
    marginHorizontal: checkMargin ? 10 : 0,
    borderWidth: checkMargin ? 1 : 0,
    borderColor: checkMargin ? theme.colors.lightgray : 0,
    shadowColor: checkMargin ? theme.colors.black : 0,
    borderRadius: checkMargin ? 30 : 0,
    shadowOffset: {width: 0, height: 2},
    boderBottomWidth: 0,
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 6,
    backgroundColor: theme.colors.white,
  }),
});
