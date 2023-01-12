import React from "react";
import styles from "../styles/addacount.module.css";
const AddAcount = () => {
  return (
    <div className={styles.formheadbox}>
      <div className={styles.formbox}>
        <h4>Create Account / LogIn</h4>
        <div className={styles.AccLog}>
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
          <div className={styles.SignIn}>
            <div>
              <span>Name</span>
              <input type="text" placeholder="Enter Your Name" />
              <span>Email</span>
              <input type="email" placeholder="Enter Your Email" />
              <span>Password</span>
              <input type="password" placeholder="Enter Your Password" />
              <span>Confirm Password</span>
              <input
                type="password"
                placeholder="Enter Your Confirm Password"
              />
            </div>
            <button>Create Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAcount;
