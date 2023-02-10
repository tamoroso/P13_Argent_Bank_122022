import React from "react";
import styles from "./FormErrors.module.css";

const FormErrors = ({ formErrors }) => {
  return (
    <div>
      {Object.keys(formErrors).map((fieldName, i) => {
        if (formErrors[fieldName].length > 0) {
          return (
            <p key={i} className={styles.error_message}>
              {fieldName} {formErrors[fieldName]}
            </p>
          );
        } else {
          return "";
        }
      })}
    </div>
  );
};

export default FormErrors;
