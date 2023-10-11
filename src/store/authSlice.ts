import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: localStorage.getItem('accessToken'),
    userId: localStorage.getItem('userId'),
    email:  localStorage.getItem('email'),
  },
  reducers: {
    setAuthData: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.email = action.payload.email;
      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('userId', action.payload.id);
      localStorage.setItem('email', action.payload.email);
    },
    resetAuthData: (state) => {
      state.accessToken = '';
      state.email = '';
      localStorage.setItem('accessToken', '');
      localStorage.setItem('email', '');
    },
  },
});

export const { setAuthData, resetAuthData } = authSlice.actions;
export default authSlice.reducer;