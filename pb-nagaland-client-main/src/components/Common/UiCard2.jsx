import React from 'react';
import {
  TouchableNativeFeedback,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import COLORS from '../../styles/colors';
import FONTS from '../../styles/fonts';
const UiCard2 = ({onPress, icon, title, description}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.icon}>
        <Icon name={icon} size={25} color={COLORS.primary} />
      </View>
      <Text style={styles.title}>{title}</Text>
      {/* <Text style={styles.description}>{description}</Text> */}
    </TouchableOpacity>
  );
};
// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     padding: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 20,
//     // elevation: 3,
//   },
//   icon: {
//     backgroundColor: COLORS.light_orange,
//     width: 60,
//     height: 60,
//     borderRadius: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text_container: {
//     flex: 4,
//   },
//   text1: {
//     ...FONTS.h4,
//   },
//   text2: {
//     fontSize: 14,
//     fontFamily: 'Urbanist-Regular',
//   },
//   arrow_icon: {
//     marginLeft: 10,
//     backgroundColor: COLORS.light_orange,
//     padding: 5,
//     borderRadius: 50,
//     height: 25,
//     width: 25,
//     alignItems: 'center',
//   },
//   divider: {
//     height: 0.5,
//     backgroundColor: '#f1f1f1',
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardwrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  card: {
    width: '48.5%',
    backgroundColor: 'white',
    marginVertical: 8,
    paddingVertical: 25,
    alignItems: 'center',
    elevation: 2,
    borderRadius: 3,
    // iOS shadow properties
    // shadowColor: 'black',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
  },
  icon: {
    backgroundColor: COLORS.light_orange,
    width: 60,
    height: 60,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...FONTS.h5,
    marginTop: 10,
  },
  description: {
    ...FONTS.h5,
    fontSize: 15,
    marginTop: 10,
  },
});
export default UiCard2;
