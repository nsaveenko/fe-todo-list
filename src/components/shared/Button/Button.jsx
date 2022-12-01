import React from "react";
import { RemoveIcon } from "asserts/RemoveIcon";
import "./Button.css";

const Button = ({ type, title, handleClick }) => {
  return (
    <>
      {type === "primary" ? (
        <button className="primary-button" onClick={handleClick}>
          {title}
        </button>
      ) : (
        <div className="secondary-button" onClick={handleClick}>
          {type === "remove" && <RemoveIcon />}
        </div>
      )}
    </>
  );
};

export default Button;
