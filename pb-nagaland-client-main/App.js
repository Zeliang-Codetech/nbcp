import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider, Text} from 'react-native-paper';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from './src/styles/colors';
import store, {persistor} from './src/store/store';
import theme from './src/styles/theme-config';
import RootNavigation from './src/navigations';

const App = () => {
  useEffect(() => {}, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          {/* <GestureHandlerRootView style={{flex: 1}}> */}
          <SafeAreaView style={{flex: 1}}>
            <StatusBar
              backgroundColor={COLORS.primary}
              barStyle={'light-content'}
            />
            <RootNavigation />
          </SafeAreaView>
          {/* </GestureHandlerRootView> */}
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
