import React from 'react';
import {Platform, Image, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  ComplaintsScreen,
  BulletinScreen,
  ManageScreen,
  AccountScreen,
} from '../screens/protected';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {useSelector} from 'react-redux';
import NAVIGATION_STRING from './NavigationStrings';
import COLORS from '../styles/colors';
import {scale} from '../utils/responsive';
import {CitiesScreen} from '../screens/protected/HomeScreen';
const BottomTab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <BottomTab.Navigator
      // sceneContainerStyle={{
      //   backgroundColor: COLORS.white,
      // }}
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 60,
          backgroundColor: 'white',
          elevation: 3,
          paddingBottom: 5,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: 'gray',
      })}>
      {/* <BottomTab.Screen
        name={NAVIGATION_STRING.SCREEN_HOME}
        component={HomeScreen}
        options={({navigation}) => ({
          tabBarIcon: ({focused}) => (
            <Icon
              name="map-location"
              size={20}
              color={focused ? COLORS.primary : COLORS.gray}
            />
          ),
          headerShown: false,
        })}
      /> */}
      <BottomTab.Screen
        name={NAVIGATION_STRING.SCREEN_CITIES}
        component={CitiesScreen}
        options={({navigation}) => ({
          tabBarIcon: ({focused}) => (
            <Icon
              name="map-location"
              size={20}
              color={focused ? COLORS.primary : COLORS.gray}
            />
          ),
          headerShown: true,
        })}
      />
      <BottomTab.Screen
        name={NAVIGATION_STRING.SCREEN_COMPLAINTS}
        component={ComplaintsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="file-text" size={20} color={color} />
          ),
          headerShown: true,
        }}
      />
      <BottomTab.Screen
        name="Bulletin"
        component={BulletinScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="newspaper" size={20} color={color} />
          ),
          headerShown: true,
          headerStyle: {
            // backgroundColor: COLORS.primary,
            elevation: 3,
          },
          // headerTintColor: COLORS.white,
        }}
      />

      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="ellipsis" size={20} color={color} />
          ),
          headerShown: true,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;
