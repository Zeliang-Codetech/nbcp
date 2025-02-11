// const {createSlice, current} = require('@reduxjs/toolkit');
// const initialState = {
//   isLoggedIn: false,
//   accessToken: null,
//   refreshToken: null,
//   user: {},
//   business: {},
// };
// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setLoggedIn(state, action) {
//       state.isLoggedIn = action.payload;
//     },
//     setUser(state, action) {
//       state.user = action.payload;
//     },
//     setBusiness(state, action) {
//       state.business = action.payload;
//     },
//     setAccessToken(state, action) {
//       state.accessToken = action.payload;
//     },
//     setRefreshToken(state, action) {
//       state.refreshToken = action.payload;
//     },
//   },
// });

// export const {
//   setLoggedIn,
//   setUser,
//   setBusiness,
//   setAccessToken,
//   setRefreshToken,
// } = authSlice.actions;
// export default authSlice.reducer;
