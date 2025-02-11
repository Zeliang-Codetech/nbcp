import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginRight: 'auto', // Margin is not commonly used in React Native, use other layout techniques
    marginLeft: 'auto', // Margin is not commonly used in React Native, use other layout techniques
  },
  row: {
    flexDirection: 'row', // Flexbox in React Native
    flexWrap: 'wrap', // Flexbox in React Native
  },
  // .col, .col-1, .col-2, ... up to .col-12
  col: {
    width: '100%', // Equivalent to width: 100% in web CSS
  },
  // .col-auto
  colAuto: {
    width: 'auto', // Equivalent to width: auto in web CSS
  },
  // .col-1
  col1: {
    width: '8.333333%', // Equivalent to width: 8.333333% in web CSS
  },
  // .col-2, .col-3, .col-4, ... up to .col-12
  col2: {
    width: '16.666667%', // Equivalent to width: 16.666667% in web CSS
  },
  col3: {
    width: '25%', // Equivalent to width: 25% in web CSS
  },
  col4: {
    width: '33.333333%', // Equivalent to width: 33.333333% in web CSS
  },
  col5: {
    width: '41.666667%', // Equivalent to width: 41.666667% in web CSS
  },
  col6: {
    width: '50%', // Equivalent to width: 50% in web CSS
  },
  col7: {
    width: '58.333333%', // Equivalent to width: 58.333333% in web CSS
  },
  col8: {
    width: '66.666667%', // Equivalent to width: 66.666667% in web CSS
  },
  col9: {
    width: '75%', // Equivalent to width: 75% in web CSS
  },
  col10: {
    width: '83.333333%', // Equivalent to width: 83.333333% in web CSS
  },
  col11: {
    width: '91.666667%', // Equivalent to width: 91.666667% in web CSS
  },
  col12: {
    width: '100%', // Equivalent to width: 100% in web CSS
  },
  // Media queries are not directly supported in React Native styles
  // You can conditionally apply styles based on the device width
  // Example: For min-width: 992px, apply the following styles
  // .col-lg, .col-lg-1, .col-lg-2, ... up to .col-lg-12
  colLg: {
    width: '100%', // Default for large screens
  },
  colLg1: {
    width: '8.333333%', // Equivalent to width: 8.333333% for large screens
  },
  // .col-lg-2, .col-lg-3, .col-lg-4, ... up to .col-lg-12 (adjust as needed)
  colLg2: {
    width: '16.666667%', // Equivalent to width: 16.666667% for large screens
  },
  // Continue with other col-lg-* classes as needed
});

export default styles;
