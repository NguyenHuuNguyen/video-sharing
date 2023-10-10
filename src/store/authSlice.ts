import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: localStorage.getItem('accessToken'),
    isShowLogin: false,
    userId: localStorage.getItem('userId'),
  },
  reducers: {
    setAuthData: (state, action) => {
      state.isShowLogin = false;
      state.accessToken = action.payload.accessToken;
      localStorage.setItem('accessToken', action.payload.token);
      localStorage.setItem('userId', action.payload.id);
    },
    resetAuthData: (state) => {
      state.accessToken = '';
      localStorage.setItem('accessToken', '');
      localStorage.setItem('userId', '');
    },
    setShowLogin: (state, action) => {
      state.isShowLogin = action.payload;
    },
  },
});

export const { setAuthData, resetAuthData, setShowLogin } = authSlice.actions;
export default authSlice.reducer;