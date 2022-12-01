import React, { Children } from "react";
import "./Scroller.css";

const Scroller = ({ children }) => {
  return (
    <div className="scroller">
      {Children.map(children, (child) => Children.only(child))}
    </div>
  );
};

export default Scroller;
