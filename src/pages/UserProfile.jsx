import React, { useContext } from "react";
import { GlobalContant } from "../GlobalDataProvider/GlobalData.js";
// import styles from "../styles/addacount.module.css";
const UserProfile = (props) => {
  let { setshowProfile } = useContext(GlobalContant);
  //   console.log(props, "In UserProfile");
  return (
    <div
      style={{
        width: "600px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        // border: "2px solid red",
        height: "100%",
      }}
    >
      <p
        style={{
          color: "#fff",
          marginRight: "3px",
          width: "60%",
          height: "100%",
        }}
      >
        {props.username}
      </p>
      <button
        style={{
          padding: "5px 10px",
          color: "black",
          backgroundColor: "#fff",
          fontSize: "20px",
          fontWeight: "bold",
        }}
        onClick={() => {
          props.logOut(props.firebaseAuth);
          setshowProfile(false);
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
