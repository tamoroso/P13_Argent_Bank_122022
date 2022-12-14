import React from "react";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <h2>Layout</h2>
      {children}
    </div>
  );
};

export default Layout;
