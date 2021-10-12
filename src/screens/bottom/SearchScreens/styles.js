import {getSize} from '../../../utils/responsive';
import {StyleSheet} from 'react-native';
import {theme} from '../../../theme';

export default StyleSheet.create({
  searchStyle: {
    width: '80%',
    marginVertical: getSize.m(1),
    borderWidth: 1,
    backgroundColor: theme.colors.white,
    height: getSize.s(39),
    borderRadius: 39,
  },
  inputStyle: {
    backgroundColor: theme.colors.white,
    color: theme.colors.black,
    marginLeft: -13,
    paddingVertical: 5,
    fontSize: 14,
  },
});
