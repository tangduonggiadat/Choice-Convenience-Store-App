import {Platform} from 'react-native';

export const theme = {
  colors: {
    background: '#F5F5F5',
    black: '#1C1C1C',
    gold: '#F9CE23',
    white: '#FFFFFF',
    red: '#E80E0E',
    darkGray: '#C5C3C3',
    hintText: '#828587',
    gray: '#BEBEBE',
    lightgray: '#DDDDDD',
    yellow: '#FBBF51',
  },

  fonts: {
    fontWeight: {
      heavy: Platform.OS === 'android' ? '700' : '300',
      bold: 'bold',
      semibold: Platform.OS === 'android' ? 'bold' : '600',
      regular: 'normal',
      light: '300',
    },
    fontFamily: {
      default: Platform.OS === 'ios' ? 'System' : 'Roboto',
    },
  },
};
