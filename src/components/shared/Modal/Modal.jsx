import React from "react";
import Button from "components/shared/Button";
import "./Modal.css";

const Modal = ({ children, setIsModalOpen, setTodoId }) => {
  const closeModal = () => {
    setIsModalOpen(false);
    setTodoId(null);
  };

  return (
    <div className="modal">
      {children}
      <Button type="primary" handleClick={closeModal} title="Close" />
    </div>
  );
};

export default Modal;
