const {createSlice, current} = require('@reduxjs/toolkit');
const initialState = {
  isLoggedIn: false,
  onboarding: false,
  fcmToken: null,
  isLoggedIn: false,
  user: {},
  business: {},
};
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setOnboarding(state, action) {
      state.onboarding = action.payload;
    },
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    setBusiness(state, action) {
      state.business = action.payload;
    },
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setRefreshToken(state, action) {
      state.refreshToken = action.payload;
    },
    setFcmToken(state, action) {
      state.fcmToken = action.payload;
    },
  },
});

export const {
  setOnboarding,
  setLoggedIn,
  setAccessToken,
  setRefreshToken,
  setUser,
  setBusiness,
  setFcmToken,
} = appSlice.actions;
export default appSlice.reducer;
