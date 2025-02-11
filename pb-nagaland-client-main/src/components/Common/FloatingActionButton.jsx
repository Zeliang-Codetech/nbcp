import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const {width} = Dimensions.get('window');
const FloatingActionButton = ({onPress, label = 'Add'}) => {
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      <Icon name="add" size={30} color="#fff" />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  fab: {
    //width: 120,
    // height: 45,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#0077FF',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    flexDirection: 'row',
    bottom: 16,
    right: 16,
    // left: (width - 120) / 2,
    marginHorizontal: 'auto',
    elevation: 5,
    zIndex: 999,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
});
export default FloatingActionButton;
