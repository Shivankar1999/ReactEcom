import React, { useState } from "react";
import styles from "../styles/addacount.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.logIn}>
      <div>
        <p>E-mail</p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter Email..."
        />
      </div>
      <div>
        <p>Password</p>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter Password..."
        />
      </div>
      <button>Log In</button>
    </div>
  );
};

export default Login;
