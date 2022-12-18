import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AccountCard } from "../../components";
import { useUpdateMeMutation } from "../../redux/api/userApi";
import styles from "./Profile.module.css";

const User = () => {
  const token = useSelector((state) => state?.userState.token);
  const user = useSelector((state) => state?.userState?.user);
  const [editMode, setEditMode] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
  });
  const navigate = useNavigate();
  const [updateMe] = useUpdateMeMutation();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  useEffect(() => {
    if (user) {
      setValues({ firstName: user.firstName, lastName: user.lastName });
    }
  }, [user]);

  const accountsData = [
    {
      accountTitle: "Argent Bank Checking (x8349)",
      accountAmount: "$2,082.79",
      accountAmountDescription: "Available Balance",
    },
    {
      accountTitle: "Argent Bank Savings (x6712)",
      accountAmount: "$10,928.42",
      accountAmountDescription: "Available Balance",
    },
    {
      accountTitle: "Argent Bank Credit Card (x8349)",
      accountAmount: "$184.30",
      accountAmountDescription: "Current Balance",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    updateMe(values)
      .unwrap()
      .then((payload) => {
        setValues({
          firstName: payload?.firstName,
          lastName: payload?.lastName,
        });
        setEditMode(false);
      });
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setValues({ firstName: user?.firstName, lastName: user?.lastName });
    setEditMode(false);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        {editMode ? (
          <>
            <h1>Welcome back</h1>
            <form className={styles.update_user_form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                className={styles.left}
                value={values?.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                value={values?.lastName}
                className={styles.right}
                onChange={handleChange}
              />
              <input
                className={`${styles.edit_button} ${styles.left}`}
                type="submit"
                value="Save"
              />
              <input
                className={`${styles.edit_button} ${styles.right}`}
                type="submit"
                onClick={handleCancel}
                value="Cancel"
              />
            </form>
          </>
        ) : (
          <>
            <h1>
              Welcome back
              <br />
              {user?.firstName} {user?.lastName}!
            </h1>
            <button
              className={styles.edit_button}
              onClick={() => setEditMode(true)}
            >
              Edit Name
            </button>
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      {accountsData.map((accountData, index) => (
        <AccountCard key={index} accountData={accountData} />
      ))}
    </main>
  );
};

export default User;
