import React from "react";
import Homeheader from "../components/Homeheader";
import LoginBack from "../components/LoginBack";
import classes from '../css-modules/LoginPage.module.css'

function LoginPage() {
  return (
    <div>
      <Homeheader/>
      <LoginBack/>
      <div className={classes.block}>
        <div className={classes.card}></div>
        <div className={classes.card}></div>
        <div className={classes.card}></div>
      </div>
    </div>
  );
}

export default LoginPage;
