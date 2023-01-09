import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import todoReducer from "state/todo/todoSlice";
import authReducer from "state/auth/authSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    auth: authReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});
