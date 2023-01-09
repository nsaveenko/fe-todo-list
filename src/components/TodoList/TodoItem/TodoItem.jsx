import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCompleted } from "state/todo/actionCreators";
import "./TodoItem.css";

const TodoItem = ({
  _id: id,
  title,
  completed,
  setIsTodoStateChanged,
  setTodoId,
  setIsModalOpen,
}) => {
  const dispatch = useDispatch();
  const [isCompleted, setIsCompleted] = useState(completed);

  function handleChange() {
    setIsCompleted(!isCompleted);
    setIsTodoStateChanged(true);
    dispatch(updateCompleted(id));
  }

  const openEditTodoModal = () => {
    setTodoId(id);
    setIsModalOpen(true);
  };

  return (
    <li className="todo">
      <input
        className="custom-checkbox"
        id={id}
        type="checkbox"
        checked={isCompleted}
        onChange={handleChange}
      />
      <label htmlFor={id} className="custom-checkbox-label" />
      <span
        className="todo-title"
        onClick={openEditTodoModal}
      >
        {title}
      </span>
    </li>
  );
};

export default TodoItem;
