import React, { useState } from "react";
import styles from "../styles/addacount.module.css";

import { Login, Signup } from "./index";
const AddAcount = () => {
  const [formC, setformC] = useState(false);
  const [active, setActive] = useState("");
  return (
    <div className={styles.formheadbox}>
      <div className={styles.formbox}>
        <span>
          <a className={active} onClick={() => setformC(true)}>
            Create Account
          </a>
          /
          <a className={active} onClick={() => setformC(false)}>
            Login
          </a>
        </span>

        <div className={styles.AccLog}>{formC ? <Signup /> : <Login />}</div>
      </div>
    </div>
  );
};

export default AddAcount;
