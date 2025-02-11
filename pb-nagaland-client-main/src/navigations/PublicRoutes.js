import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {View} from 'react-native';
import NAVIGATION_STRING from './NavigationStrings';
import {LoginScreen} from '../screens/public';
const Stack = createNativeStackNavigator();
const PublicNavigation = () => {
  const user = useSelector(state => state.app?.user);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#FFFFFF',
        },
      }}>
      <Stack.Screen
        name={NAVIGATION_STRING.SCREEN_LOGIN}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};
export default PublicNavigation;
