import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import todoReducer from "state/todo/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});
