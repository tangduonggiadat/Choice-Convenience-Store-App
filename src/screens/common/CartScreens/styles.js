import {getSize, width} from '../../../utils/responsive';
import {StyleSheet} from 'react-native';
import {theme} from '../../../theme';

export default StyleSheet.create({
  bottomContainer: {
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderTopWidth: 2,
    borderColor: theme.colors.lightgray,
    shadowColor: theme.colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
  },
  inputStyle: {
    backgroundColor: theme.colors.white,
    elevation: 5,
    paddingLeft: 20,
    borderRadius: 10,
    width: width - 85,
  },
  imageStyle: {width: 30, height: 30},
});
