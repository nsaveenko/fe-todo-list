import React from "react";
import { useHistory } from "react-router-dom";
import Button from "components/shared/Button";
import "./Header.css";

const Header = ({ setIsModalOpen }) => {
  const history = useHistory();
  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <header className="header">
      <h1 className="page-title" onClick={() => history.push("/")}>
        Tassker
      </h1>
      <Button type="primary" title="+ Add a New Task" handleClick={openModal} />
    </header>
  );
};

export default Header;
