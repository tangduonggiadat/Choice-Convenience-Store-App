import {getSize, width} from '../../../utils/responsive';
import {StyleSheet} from 'react-native';
import {theme} from '../../../theme';

export default StyleSheet.create({
  headerContainer: {
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderBottomWidth: 2,
    borderColor: theme.colors.lightgray,
    shadowColor: theme.colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
  },
  listContainer: {
    borderBottomWidth: 2,
    borderColor: theme.colors.lightgray,
    shadowColor: theme.colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  footerContainer: {
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    borderBottomWidth: 1,
    borderColor: theme.colors.lightgray,
    shadowColor: theme.colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 2,
  },
});
