import React, { useState } from "react";
import styles from "../styles/addacount.module.css";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebasesetup/firebase";

const auth = getAuth(app);

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setUsetInfo = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((val) => alert(`${name} account created succesfully`))
      .catch((err) => {
        console.log(err);
        alert("Please re-check enter data");
      });
    setEmail("");
    setPassword("");
    setName("");
  };
  return (
    <div className={styles.SignIn}>
      <div>
        <span>Name</span>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Enter Your Name"
        />
        <span>Email</span>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter Your Email"
        />
        <span>Password</span>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter Your Password"
        />
      </div>
      <button onClick={setUsetInfo}>Create Account</button>
    </div>
  );
};

export default Signup;
