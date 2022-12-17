import React, { useEffect } from "react";
import { useLoginUserMutation } from "../../redux/api/authApi";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginUser, { isLoading, isError, error, isSuccess }] =
    useLoginUserMutation();

  const navigate = useNavigate();

  const handleLogin = () => {
    const data = {
      email: "tony@stark.com",
      password: "password123",
    };

    loginUser(data);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/profile");
    }
  }, [isSuccess, navigate]);

  return (
    <>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
