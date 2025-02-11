import {StyleSheet, Platform} from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: 'lightgray',
      },
      android: {
        backgroundColor: 'lightblue',
      },
    }),
  },
});

export default globalStyles;
