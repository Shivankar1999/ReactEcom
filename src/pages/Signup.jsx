import React, { useState, useEffect } from "react";
import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import styles from "../styles/addacount.module.css";
import { GlobalContant } from "../GlobalDataProvider/GlobalData.js";

const Signup = () => {
  const { CreateUserWemailPass, setUserName, isLogedIn, username } =
    useContext(GlobalContant);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Creating Account");
    const result = await CreateUserWemailPass(email, password).then(
      (data) => data
    );
    setName(name);
    setUserName(name);
    setEmail("");
    setPassword("");
    setName("");
    alert(`User ${username} account is created..`);
    // console.log("User Account is Created", result);
  };

  return (
    <form className={styles.SignIn} onSubmit={handleSubmit}>
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
      <button type="submit">Create Account</button>
    </form>
  );
};

export default Signup;
