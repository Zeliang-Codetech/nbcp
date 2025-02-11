import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Text, View} from 'react-native';
import BottomNavigation from '../../navigations/BottomNavigation';

const MainScreen = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <>
      <BottomNavigation />
    </>
  );
};
export default MainScreen;
