import { todoApi } from "api/todo.api.js";
import { ERRORS } from "constants/errors";
import {
  fetchTodoPending,
  fetchTodoRejected,
  getTodosFulfilled,
  addTodoFulfilled,
  getTodoByIdFulfilled,
  updateCompletedFulfilled,
  deleteTodoByIdFulfilled,
  updateTodoFulfilled,
} from "./todoSlice";

const {
  ADD_TODO_ERROR_MESSAGE,
  FETCH_TODOS_ERROR_MESSAGE,
  GET_TODO_ERROR_MESSAGE,
  UPDATE_TODO_ERROR_MESSAGE,
  DELETE_TODO_ERROR_MESSAGE,
} = ERRORS;

const {
  getTodos,
  addTodo,
  getTodoById,
  updateCompletedTodo,
  deleteTodoById,
  updateTodo,
} = todoApi;

export const fetchTodos = () => async (dispatch) => {
  try {
    dispatch(fetchTodoPending());
    const result = await getTodos();
    dispatch(getTodosFulfilled(result));
  } catch (error) {
    dispatch(fetchTodoRejected(FETCH_TODOS_ERROR_MESSAGE));
  }
};

export const createNewTodo = (newTodo) => async (dispatch) => {
  try {
    dispatch(fetchTodoPending());
    await addTodo(newTodo);
    dispatch(addTodoFulfilled());
  } catch (error) {
    dispatch(fetchTodoRejected(ADD_TODO_ERROR_MESSAGE));
  }
};

export const getTodo = (id) => async (dispatch) => {
  try {
    dispatch(fetchTodoPending());
    const result = await getTodoById(id);
    dispatch(getTodoByIdFulfilled(result));
  } catch (error) {
    dispatch(fetchTodoRejected(GET_TODO_ERROR_MESSAGE));
  }
};

export const updateCompleted = (id) => async (dispatch) => {
  try {
    dispatch(fetchTodoPending());
    const result = await updateCompletedTodo(id);
    dispatch(updateCompletedFulfilled(result));
  } catch (error) {
    dispatch(fetchTodoRejected(UPDATE_TODO_ERROR_MESSAGE));
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    dispatch(fetchTodoPending());
    const result = await deleteTodoById(id);
    dispatch(deleteTodoByIdFulfilled(result));
  } catch (error) {
    dispatch(fetchTodoRejected(DELETE_TODO_ERROR_MESSAGE));
  }
};

export const editTodo = (id, newTodo) => async (dispatch) => {
  try {
    dispatch(fetchTodoPending());
    const result = await updateTodo(id, newTodo);
    dispatch(updateTodoFulfilled(result));
  } catch (error) {
    dispatch(fetchTodoRejected(UPDATE_TODO_ERROR_MESSAGE));
  }
};
