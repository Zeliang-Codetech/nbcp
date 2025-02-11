import {
  configureFonts,
  MD3LightTheme,
  MD2LightTheme,
  DefaultTheme,
} from 'react-native-paper';
import Colors from './colors';
import {FONT_FAMILY} from './fonts';
import {Platform} from 'react-native';
const fontConfig = {
  android: {
    regular: {
      fontFamily: 'Urbanist-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Urbanist-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Urbanist-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Urbanist-Thin',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'Urbanist-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Urbanist-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Urbanist-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Urbanist-Thin',
      fontWeight: 'normal',
    },
  },
  web: {
    regular: {
      fontFamily: 'Urbanist-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Urbanist-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Urbanist-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Urbanist-Thin',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.primary,
    accent: Colors.secondary,
    background: '#16171B',
    text: 'red',
  },
  // fonts: configureFonts(fontConfig),
  fonts: configureFonts({config: {fontFamily: 'Urbanist-Regular'}}),
};

export default theme;
