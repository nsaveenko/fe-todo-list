export const generateTitleByTodoCount = (count) => {
  if (count === 0) {
    return "There are no tasks on this day yet";
  } else if (count === 1) {
    return `${count} task on this day`;
  } else {
    return `${count} tasks on this day`;
  }
}

export const filterTodosByDate = (todos, selectedDay) => {
  return todos.filter((todo) => {
    return todo.date === selectedDay;
  });
}