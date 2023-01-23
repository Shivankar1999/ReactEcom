import React, { useState, useContext } from "react";
import styles from "../styles/addacount.module.css";
import { GlobalContant } from "../GlobalDataProvider/GlobalData.js";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { SignInUserWemailPass, setshowProfile } = useContext(GlobalContant);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Loging User....");
    const result = await SignInUserWemailPass(email, password).then(
      (res) => res
    );
    setshowProfile(true);
    // console.log("LogIn User successfully", result);
    navigate("/");
    setEmail("");
    setPassword("");
    alert(` User  just loged in`);
  };

  return (
    <form className={styles.logIn} onSubmit={handleSubmit}>
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
      <button type="submit">Log In</button>
    </form>
  );
};

export default Login;
