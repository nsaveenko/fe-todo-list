import { Api } from "./api";

export const todoApi = {
  getTodos: () => Api.get({ path: "todo" }),
  addTodo: (newTodo) =>
    Api.post({
      path: "todo",
      body: newTodo,
    }),
  getTodoById: (id) => Api.get({ path: `todo/${id}` }),
  updateCompletedTodo: (id) => Api.put({ path: `todo/completed/${id}` }),
  deleteTodoById: (id) => Api.delete({ path: `todo/${id}` }),
  updateTodo: (id, todo) => Api.put({ path: `todo/${id}`, body: todo }),
};
