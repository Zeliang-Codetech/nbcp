import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ToastAndroid,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {showSnackbar, showToast} from '../../utils/utils';
import SnackbarService from '../../utils/SnakebarService';
import {useNavigation} from '@react-navigation/native';
import FONTS from '../../styles/fonts';
import NAVIGATION_STRING from '../../navigations/NavigationStrings';

const BulletinScreen = () => {
  const navigation = useNavigation();
  return <View style={styles.container}></View>;
};

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
});
export default BulletinScreen;
