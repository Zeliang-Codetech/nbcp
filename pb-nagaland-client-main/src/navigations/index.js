import React, {useEffect, useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';
import {HeaderButtonsProvider} from 'react-navigation-header-buttons';
import {MenuProvider} from 'react-native-popup-menu';
import {StatusBar} from 'react-native';
import COLORS from '../styles/colors';
const RootNavigation = ({}) => {
  const dispatch = useDispatch();
  const {isLoggedIn} = useSelector(state => state.app);
  // console.log('isLoggedIn', isLoggedIn);

  return (
    <>
      {/* <HeaderButtonsProvider> */}
      <MenuProvider>
        <NavigationContainer>
          {!isLoggedIn ? <PublicRoutes /> : <ProtectedRoutes />}
        </NavigationContainer>
      </MenuProvider>
      {/* </HeaderButtonsProvider> */}
    </>
  );
};

export default RootNavigation;
