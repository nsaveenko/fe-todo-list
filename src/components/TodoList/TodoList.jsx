import React from "react";
import TodoItem from "components/TodoList/TodoItem";
import "./TodoList.css";

const TodoList = ({
  todos,
  setIsTodoStateChanged,
  setTodoId,
  setIsModalOpen,
}) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <TodoItem
            setIsTodoStateChanged={setIsTodoStateChanged}
            setTodoId={setTodoId}
            setIsModalOpen={setIsModalOpen}
            key={todo._id}
            {...todo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
