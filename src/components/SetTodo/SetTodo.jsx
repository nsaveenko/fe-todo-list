import React, { useState, useEffect } from "react";
import moment from "moment";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodo,
  createNewTodo,
  deleteTodo,
  editTodo,
} from "state/todo/actionCreators";
import { fetchTodoPending } from "state/todo/todoSlice";
import Button from "components/shared/Button";
import "react-datepicker/dist/react-datepicker.css";
import "./SetTodo.css";

const SetTodo = ({
  todoId,
  setIsModalOpen,
  setTodoId,
  setIsTodoStateChanged,
}) => {
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const { todo, isLoaded } = useSelector((state) => state.todo);
  const submitInputValue = todoId ? "Update" : "Create";

  const newTodo = {
    email: "nn.saveenko@gmail.com",
    date: moment(date).format("MMM Do YY").toString(),
    title: newTitle,
    description: newDescription,
    completed: false,
  };

  useEffect(() => {
    if (todoId) {
      dispatch(getTodo(todoId));
    }

    if (!todoId) {
      setNewTitle("What do you need to do?");
      setNewDescription("Describe it!");
    }

    return () => {
      dispatch(fetchTodoPending());
    };
  }, []);

  useEffect(() => {
    if (isLoaded && todo.title) {
      setNewTitle(todo.title);
      setNewDescription(todo.description);
    }
  }, [isLoaded]);

  function handleSubmit(event) {
    event.preventDefault();
    if (todoId) {
      dispatch(editTodo(todoId, newTodo));
    } else {
      dispatch(createNewTodo(newTodo));
    }
    setIsModalOpen(false);
    setTodoId(null);
    setIsTodoStateChanged(true);
  }

  function handleDelete() {
    dispatch(deleteTodo(todoId));
    setIsModalOpen(false);
    setTodoId(null);
    setIsTodoStateChanged(true);
  }

  return (
    <div className="wrapper">
      <h1>{submitInputValue} your todo!</h1>
      <form className="todo-form" onSubmit={handleSubmit}>
        <label>
          <h3 className="input-title">Task title:</h3>
          <input
            type="text"
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
            onClick={() => setNewTitle("")}
          />
        </label>
        <label>
          <h3 className="input-title">Task description:</h3>
          <input
            type="text"
            value={newDescription}
            onChange={(event) => setNewDescription(event.target.value)}
            onClick={() => setNewDescription("")}
          />
        </label>
        <DatePicker selected={date} onChange={(date) => setDate(date)} />
        <div className="main-content">
          <input
            className="primary-button"
            type="submit"
            value={submitInputValue}
          />
          {todoId && <Button type="remove" handleClick={handleDelete} />}
        </div>
      </form>
    </div>
  );
};

export default SetTodo;
