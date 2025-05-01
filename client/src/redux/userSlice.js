// src/slices/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Initial state for user data
const initialState = {
  user: null,  // User will be stored here (can be null initially)
  status: 'idle',  // For tracking loading states
  error: null,  // For handling errors
};

// Create userSlice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Set user data (e.g., after login)
    setUser: (state, action) => {
      state.user = action.payload;  // Storing user data in state
    },

    // Clear user data (e.g., after logout)
    clearUser: (state) => {
      state.user = null;
    },

    // Set error message
    setError: (state, action) => {
      state.error = action.payload;
    },

    // Set loading state
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

// Export actions so you can dispatch them
export const { setUser, clearUser, setError, setStatus } = userSlice.actions;

// Export the reducer to add it to the store
export default userSlice.reducer;
