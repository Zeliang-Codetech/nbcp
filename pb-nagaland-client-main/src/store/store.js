import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {apiSlice, authApiSlice} from './apis/apiSlice';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import authReducer from './slices/authSlice';
import appReducer from './slices/appSlice';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  // blacklist: ['auth', 'app'],
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    // auth: authReducer,
    app: appReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  }),
);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false,
      serializableCheck: false,
    })
      .concat(apiSlice.middleware)
      .concat(authApiSlice.middleware),
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
export default store;
