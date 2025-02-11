import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {View} from 'react-native';
import NAVIGATION_STRING from './NavigationStrings';
import {
  MainScreen,
  BulletinScreen,
  ComplaintsScreen,
  ManageScreen,
  AddEditComplaintScreen,
} from '../screens/protected';
import {FONT_FAMILY} from '../styles/fonts';
import {LoginScreen, AboutUsScreen} from '../screens/public';
import AreaScreen from '../screens/protected/AreaScreen';
import {CitiesScreen} from '../screens/protected/HomeScreen';
const Stack = createNativeStackNavigator();
const ProtectedNavigation = () => {
  const user = useSelector(state => state.app?.user);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleStyle: {
          fontFamily: FONT_FAMILY.URBANIST_REGULAR,
          fontSize: 18,
        },
        cardStyle: {
          backgroundColor: '#FFFFFF',
        },
      }}>
      <Stack.Screen
        name={NAVIGATION_STRING.SCREEN_MAIN}
        component={MainScreen}
      />

      <Stack.Screen
        name={NAVIGATION_STRING.SCREEN_BULLETIN}
        component={BulletinScreen}
      />
      <Stack.Screen
        name={NAVIGATION_STRING.SCREEN_COMPLAINTS}
        component={ComplaintsScreen}
      />
      <Stack.Screen
        name={NAVIGATION_STRING.SCREEN_MANAGE}
        component={ManageScreen}
      />
      <Stack.Screen
        name={NAVIGATION_STRING.SCREEN_ADD_EDIT_COMPLAINT}
        component={AddEditComplaintScreen}
        options={{
          title: 'Add Complaint',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={NAVIGATION_STRING.SCREEN_ABOUT_US}
        component={AboutUsScreen}
        options={{
          title: 'About Us',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name={NAVIGATION_STRING.SCREEN_AREAS}
        component={AreaScreen}
        options={{
          title: 'Stations',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};
export default ProtectedNavigation;
