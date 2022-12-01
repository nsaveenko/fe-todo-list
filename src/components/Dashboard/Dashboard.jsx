import React, { useState, useEffect } from "react";
import moment from "moment";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { fetchTodos } from "state/todo/actionCreators";
import Header from "components/Header";
import Calendar from "components/Calendar";
import TodoList from "components/TodoList";
import Modal from "components/shared/Modal";
import SetTodo from "components/SetTodo";
import { date, currentDay } from "utils/date";
import { generateTitleByTodoCount, filterTodosByDate } from "utils/todos";
import "./Dashboard.css";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const dispatch = useAppDispatch();
  const [selectedDay, setSelectedDay] = useState(moment().format("MMM Do YY"));
  const [isTodoStateChanged, setIsTodoStateChanged] = useState(false);
  const { todos } = useAppSelector((state) => state.todo);
  const todosByDate = filterTodosByDate(todos, selectedDay);
  const todosCountTitle = generateTitleByTodoCount(todosByDate.length);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTodos());

    if (isTodoStateChanged) {
      setIsTodoStateChanged(false);
    }
  }, [isTodoStateChanged]);

  const handleSelectedDayChange = (day) => {
    setSelectedDay(day);
  };

  return (
    <>
      <Header setIsModalOpen={setIsModalOpen} />
      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen} setTodoId={setTodoId}>
          <SetTodo
            todoId={todoId}
            setIsModalOpen={setIsModalOpen}
            setTodoId={setTodoId}
            setIsTodoStateChanged={setIsTodoStateChanged}
          />
        </Modal>
      )}
      <div className="wrapper todos">
        <Calendar
          date={date}
          currentDay={currentDay}
          selectedDay={selectedDay}
          handleSelectedDayChange={handleSelectedDayChange}
          todos={todos}
        />
        <h3 className="todos-count">{todosCountTitle}</h3>
        <TodoList
          setTodoId={setTodoId}
          date={date}
          todos={todosByDate}
          setIsTodoStateChanged={setIsTodoStateChanged}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </>
  );
};

export default Dashboard;
