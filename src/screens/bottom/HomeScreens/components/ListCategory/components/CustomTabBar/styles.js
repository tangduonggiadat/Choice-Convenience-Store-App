import {theme} from '../../../../../../../theme';
import {StyleSheet} from 'react-native';
import {getSize} from '../../../../../../../utils/responsive';

export default StyleSheet.create({
  container: isFocused => ({
    paddingVertical: 13,
    paddingHorizontal: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginLeft: 15,
    borderWidth: 2,
    backgroundColor: isFocused ? theme.colors.black : theme.colors.white,
  }),
  textStyle: isFocused => ({
    color: isFocused ? theme.colors.white : theme.colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  }),
});
