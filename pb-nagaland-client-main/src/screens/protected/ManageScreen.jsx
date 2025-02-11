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
const ManageScreen = () => {
  const navigation = useNavigation();
  const lists = [
    // {
    //   id: 1,
    //   name: 'Product Management',
    //   icon: 'box',
    //   url: NAVIGATION_STRING.SCREEN_PRODUCT_MANAGEMENT,
    // },
  ];

  const handleItemPress = item => {
    switch (item.id) {
      case 1:
        // navigation.navigate(NAVIGATION_STRING.SCREEN_PRODUCT_MANAGEMENT);
        break;
      default:
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardwrap}>
          {/* {lists?.map(list => (
            <UiCard2
              icon={item.icon}
              title={item.name}
              onPress={() => handleItemPress(item)}
            />
          ))} */}
        </View>
      </ScrollView>
    </View>
  );
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
export default ManageScreen;
