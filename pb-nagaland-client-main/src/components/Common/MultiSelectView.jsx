import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import FONTS from '../../styles/fonts';
import COLORS from '../../styles/colors';
const MultiSelectView = ({
  onPress = () => {},
  style = {},
  label,
  name,
  value,
  data,
  placeholder,
  error,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={{...styles.container, ...style}}
        onPress={onPress}>
        <Text>{data || placeholder}</Text>
        <Icon name="chevron-down" size={15} color="#ccc" />
      </TouchableOpacity>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
    borderColor: '#ccc',
    elevation: 1,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textTransform: 'uppercase',
    // borderWidth: 0.5,
  },
  label: {
    ...FONTS.label,
    marginBottom: 5,
  },
  error: {
    color: COLORS.red,
    ...FONTS.h6,
  },
});
export default MultiSelectView;
