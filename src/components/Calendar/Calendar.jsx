import React from "react";
import moment from "moment";
import Scroll from "components/shared/Scroller";
import CalendarItem from "components/Calendar/CalendarItem";
import { weekDays, daysInMonth, month, year, initMonth } from "utils/date";
import { filterTodosByDate } from "utils/todos";
import "./Calendar.css";

const Calendar = ({
  currentDay,
  selectedDay,
  handleSelectedDayChange,
  todos,
}) => {
  function handleDayClick(event) {
    handleSelectedDayChange(
      moment(`${month}/${event.currentTarget.id}/${year}`).format("MMM Do YY")
    );
  }

  return (
    <div className="scroll-container">
      <Scroll>
        <ul className="calendar">
          {initMonth(daysInMonth).map((day) => (
            <CalendarItem
              key={day}
              day={day}
              weekDays={weekDays}
              currentDay={currentDay}
              selectedDay={selectedDay}
              handleDayClick={handleDayClick}
              todosByDate={filterTodosByDate(
                todos,
                moment(+day).format("MMM Do YY")
              )}
            />
          ))}
        </ul>
      </Scroll>
    </div>
  );
};

export default Calendar;
