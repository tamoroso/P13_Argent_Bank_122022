import React from "react";
import styles from "./AccountCard.module.css";

const AccountCard = ({ accountData }) => {
  const { accountTitle, accountAmount, accountAmountDescription } = accountData;
  return (
    <section className={styles.account}>
      <div className={styles.account_content_wrapper}>
        <h3>{accountTitle}</h3>
        <p className={styles.account_amount}>{accountAmount}</p>
        <p className={styles.account_amount_description}>
          {accountAmountDescription}
        </p>
      </div>
      <div className={`${styles.account_content_wrapper} ${styles.cta}`}>
        <button onClick={(event) => event.preventDefault()}>
          View transactions
        </button>
      </div>
    </section>
  );
};

export default AccountCard;
