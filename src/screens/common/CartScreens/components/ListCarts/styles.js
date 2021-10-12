import {theme} from '../../../../../theme';
import {StyleSheet} from 'react-native';

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
  rbStyle: {
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
    width: 30,
    height: 30,
    elevation: 8,
    shadowColor: theme.colors.black,
    shadowOpacity: 0.5,
  },
  btnStyle: {
    height: 22,
    width: 22,
    borderRadius: 110,
    borderWidth: 3,
    borderColor: theme.colors.gold,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
