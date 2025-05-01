import { configureStore } from '@reduxjs/toolkit';
import appReducer from './appSlice';  // Import appReducer
import userReducer from './userSlice';  // Import userReducer

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,  // Add userSlice to store
  },
});
