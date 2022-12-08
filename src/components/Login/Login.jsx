import Checkbox from "components/shared/Checkbox";
import React, { useState, useEffect } from "react";
import "./Login.css";

const Login = ({ pageType }) => {
  const [email, setEmail] = useState("Input email...");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState("text");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  useEffect(() => {
    if (!isShowPassword) {
      setPasswordInputType("password");
    } else {
      setPasswordInputType("text");
    }
  }, [isShowPassword]);

  return (
    <>
      {pageType === "signup" ? <h1>Registration</h1> : <h1>Entry</h1>}
      <form onSubmit={handleSubmit} className="login-form">
        <label className="label">
          <h3>Email</h3>
          <input
            type="email"
            value={email}
            onChange={onEmailChange}
            onClick={() => setEmail("")}
            required
          />
        </label>
        <label className="label">
          <h3>Password</h3>
          <input
            type={passwordInputType}
            value={password}
            onChange={onPasswordChange}
            onClick={() => setPassword("")}
            required
          />
        </label>
        <label className="label">
          <Checkbox
            isChecked={isShowPassword}
            handleChange={handleShowPassword}
            title="Show password"
          />
        </label>

        <input className="primary-button" type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Login;
