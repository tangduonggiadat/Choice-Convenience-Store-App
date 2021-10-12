import {getSize, width} from '../../../../../utils/responsive';
import {StyleSheet} from 'react-native';
import {theme} from '../../../../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.colors.gold,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    marginVertical: 5,
  },
  circleBox: {
    width: 79,
    height: 79,
    backgroundColor: theme.colors.gold,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
