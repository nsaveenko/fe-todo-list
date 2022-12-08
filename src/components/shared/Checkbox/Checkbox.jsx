import React from "react";
import "./Checkbox.css";

const Checkbox = ({ title, id, isChecked, handleChange, handleClick }) => {
  return (
    <div className="checkbox">
      <input
        className="custom-checkbox"
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor={id} className="custom-checkbox-label" />
      <span className="todo-title" onClick={handleClick}>
        {title}
      </span>
    </div>
  );
};

export default Checkbox;
