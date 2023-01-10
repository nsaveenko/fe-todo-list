import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { useHistory } from "react-router-dom";
import { register } from "state/auth/actionCreators";
import Checkbox from "components/shared/Checkbox";
import validateEmail from "utils/validation/validateEmail";
import "./Login.css";

const Login = ({ pageType }) => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState("text");
  const [error, setError] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
    dispatch();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      setError("Email is not valid");
      return;
    }

    if (password.length < 4) {
      setError("Password is too short");
      return;
    }

    dispatch(register(email, password)).then(() => {
      history.push("/");
    })
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
            placeholder="e-mail"
            value={email}
            onChange={onEmailChange}
            required
          />
        </label>
        <label className="label">
          <h3>Password</h3>
          <input
            type={passwordInputType}
            placeholder="password"
            value={password}
            onChange={onPasswordChange}
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
        {error && <h4>{error}</h4>}
        <input className="primary-button" type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Login;
