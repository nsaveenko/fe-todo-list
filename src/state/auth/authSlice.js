import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoggedIn: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    pending: (state) => {
      state.isLoaded = false;
    },
    rejected: (state, action) => {
      state.error = action.payload;
      state.isLoaded = false;
    },
    signupFulfilled: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = "";
    },
    signinFulfilled: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = "";
    },
    logoutFulfilled: (state) => {
      state.error = "";
    },
    refreshFulfilled: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = "";
    },
  },
});

export const {
  pending,
  rejected,
  signupFulfilled,
  signinFulfilled,
  logoutFulfilled,
  refreshFulfilled,
} = authSlice.actions;

export default authSlice.reducer;
