import React from 'react';
import {TouchableNativeFeedback, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import COLORS from '../../styles/colors';
import FONTS from '../../styles/fonts';
const UiCard = ({onPress, icon, title, description}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View>
        <View style={styles.container}>
          <View style={styles.icon}>
            <Icon name={icon} size={30} color={COLORS.primary} style={{}} />
          </View>
          <View style={styles.text_container}>
            <Text style={styles.text1}>{title}</Text>
            <Text style={styles.text2}>{description}</Text>
          </View>

          <View style={styles.arrow_icon}>
            <Icon name="chevron-right" size={15} color={COLORS.primary} />
          </View>
        </View>
        <View style={styles.divider}></View>
      </View>
    </TouchableNativeFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    // elevation: 3,
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
  text_container: {
    flex: 4,
  },
  text1: {
    ...FONTS.h4,
  },
  text2: {
    fontSize: 14,
    fontFamily: 'Urbanist-Regular',
  },
  arrow_icon: {
    marginLeft: 10,
    backgroundColor: COLORS.light_orange,
    padding: 5,
    borderRadius: 50,
    height: 25,
    width: 25,
    alignItems: 'center',
  },
  divider: {
    height: 0.5,
    backgroundColor: '#f1f1f1',
  },
});
export default UiCard;
