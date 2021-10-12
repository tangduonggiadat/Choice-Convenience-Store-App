import {StyleSheet} from 'react-native';
import {theme} from '../../../../../theme';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.lightgray,
    borderBottomWidth: 0,
    shadowColor: theme.colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
  },
  badge: {
    width: 0.5,
    height: 0.5,
    position: 'absolute',
    top: 10,
    right: 15,
  },
});
