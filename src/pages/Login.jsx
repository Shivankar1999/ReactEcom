import React from "react";
import styles from "../styles/addacount.module.css";
const Login = () => {
  return (
    <div className={styles.logIn}>
      <div>
        <p>E-mail</p>
        <input type="email" placeholder="Enter Email..." />
      </div>
      <div>
        <p>Password</p>
        <input type="password" placeholder="Enter Password..." />
      </div>
      <button>Log In</button>
    </div>
  );
};

export default Login;
