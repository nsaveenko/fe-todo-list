import React, { useState } from "react";
import { useAppDispatch } from "store/hooks";
import { updateCompleted } from "state/todo/actionCreators";
import "./TodoItem.css";

const TodoItem = ({
  _id,
  title,
  completed,
  setIsTodoStateChanged,
  setTodoId,
  setIsModalOpen,
}) => {
  const dispatch = useAppDispatch();
  const [isCompleted, setIsCompleted] = useState(completed);

  function handleChange() {
    setIsCompleted(!isCompleted);
    setIsTodoStateChanged(true);
    dispatch(updateCompleted(_id));
  }

  const openEditTodoModal = () => {
    setTodoId(_id);
    setIsModalOpen(true);
  };

  return (
    <li className="todo">
      <input
        className="custom-checkbox"
        id={_id}
        type="checkbox"
        checked={isCompleted}
        onChange={handleChange}
      />
      <label htmlFor={_id} className="custom-checkbox-label" />
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
