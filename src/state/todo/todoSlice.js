import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  todo: {},
  isLoaded: false,
  error: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    fetchTodoPending: (state) => {
      state.isLoaded = false;
    },
    fetchTodoRejected: (state, action) => {
      state.error = action.payload;
      state.isLoaded = false;
    },
    getTodosFulfilled: (state, action) => {
      state.todos = action.payload;
      state.isLoaded = true;
      state.error = "";
    },
    addTodoFulfilled: (state) => {
      state.isLoaded = true;
      state.error = "";
    },
    getTodoByIdFulfilled: (state, action) => {
      state.todo = action.payload;
      state.isLoaded = true;
      state.error = "";
    },
    updateCompletedFulfilled: (state, action) => {
      state.todo = action.payload;
      state.isLoaded = true;
      state.error = "";
    },
    deleteTodoByIdFulfilled: (state) => {
      state.isLoaded = true;
      state.error = "";
    },
    updateTodoFulfilled: (state, action) => {
      state.todo = action.payload;
      state.isLoaded = true;
      state.error = "";
    },
  },
});

export const {
  fetchTodoPending,
  fetchTodoRejected,
  getTodosFulfilled,
  addTodoFulfilled,
  getTodoByIdFulfilled,
  updateCompletedFulfilled,
  deleteTodoByIdFulfilled,
  updateTodoFulfilled,
} = todoSlice.actions;

export default todoSlice.reducer;
