import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebasesetup/firebase";

import React, { useState } from "react";
import styles from "../styles/addacount.module.css";
const auth = getAuth(app);
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginUserCheck = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((val) => alert("User Login Succesfully"))
      .catch((err) => {
        alert("Plaese Check data you enter");
        console.log(err);
      });
    setEmail("");
    setPassword("");
  };
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
      <button onClick={LoginUserCheck}>Log In</button>
    </div>
  );
};

export default Login;
