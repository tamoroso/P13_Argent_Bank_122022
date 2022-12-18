import React, { useEffect, useState } from "react";
import { useLoginUserMutation } from "../../redux/api/authApi";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [loginUser, { isLoading, isError, error, isSuccess }] =
    useLoginUserMutation();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(inputs);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/profile");
    }
  }, [isSuccess, navigate]);

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
