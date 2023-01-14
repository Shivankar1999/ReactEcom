import React from "react";
import styles from "../styles/addacount.module.css";
const Signin = () => {
  return (
    <div className={styles.SignIn}>
      <div>
        <span>Name</span>
        <input type="text" placeholder="Enter Your Name" />
        <span>Email</span>
        <input type="email" placeholder="Enter Your Email" />
        <span>Password</span>
        <input type="password" placeholder="Enter Your Password" />
        <span>Confirm Password</span>
        <input type="password" placeholder="Enter Your Confirm Password" />
      </div>
      <button>Create Account</button>
    </div>
  );
};

export default Signin;
