import {theme} from '../../../../../theme';
import {StyleSheet} from 'react-native';
import {getSize, width} from '../../../../../utils/responsive';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 13,
    borderRadius: 30,
    alignItems: 'center',
    marginRight: 15,
    borderWidth: 2,
  },
  textStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
