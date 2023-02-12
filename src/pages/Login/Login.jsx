import React, { useEffect, useState } from "react";
import { useLoginUserMutation } from "../../redux/api/authApi";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FormErrors } from "../../components";

const Login = () => {
  const [loginUser, { isSuccess, isError, error }] = useLoginUserMutation();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({ email: "", password: "" });
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [submitErrors, setSubmitErrors] = useState("");

  const validateField = (fieldName, value) => {
    let fieldValidationErrors = formErrors;
    let emailValid = isEmailValid;
    let passwordValid = isPasswordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      default:
        break;
    }
    setFormErrors(fieldValidationErrors);
    setIsEmailValid(emailValid);
    setIsPasswordValid(passwordValid);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    validateField(name, value);
    setSubmitErrors("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(inputs);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/profile");
    }
    if (isError) {
      setSubmitErrors(error?.data?.message);
    }
  }, [isSuccess, navigate, isError, error]);

  return (
    <main className={styles.main}>
      <section className={styles.signIn_content}>
        <FontAwesomeIcon icon={faUserCircle} />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.input_wrapper}>
            <label htmlFor="username">Username</label>
            <input
              name="email"
              type="text"
              id="username"
              value={inputs.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_wrapper}>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              id="password"
              value={inputs.password}
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_remember}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <FormErrors formErrors={formErrors} />
          <p style={{ color: "red" }}>{submitErrors}</p>
          <input
            className={styles.signIn_button}
            type="submit"
            value="Sign In"
          />
        </form>
      </section>
    </main>
  );
};

export default Login;
