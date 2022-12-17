import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUpdateMeMutation } from "../../redux/api/userApi";
import { logout } from "../../redux/features/userSlice";
import styles from "./Profile.module.css";

const User = () => {
  const token = useSelector((state) => state?.userState.token);
  const user = useSelector((state) => state?.userState?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateMe] = useUpdateMeMutation();

  const dataToSend = {
    firstName: "Jean-Paul",
    lastName: "LeClaudeau",
  };

  const originalData = {
    firstName: "Tony",
    lastName: "Stark",
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const doUpdateUser = () => {
    updateMe(dataToSend);
  };

  const doRevertChanges = () => {
    updateMe(originalData);
  };

  return (
    <>
      <h1>
        Bonjour, {user?.firstName} {user?.lastName}
      </h1>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={doUpdateUser}>Update</button>
      <button onClick={doRevertChanges}>Revert</button>
    </>
  );
};

export default User;
