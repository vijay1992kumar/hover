// src/slices/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Initial state for user data
const initialState = {
  drawer: {isOpen:true},  // User will be stored here (can be null initially)
};

// Create userSlice
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Set drawer data (e.g., after login)
    toggleDrawer: (state, action) => {
      state.drawer = {isOpen:!state.drawer.isOpen};  // Storing user data in state
    },

  },
});

// Export actions so you can dispatch them
export const { toggleDrawer } = appSlice.actions;

// Export the reducer to add it to the store
export default appSlice.reducer;
