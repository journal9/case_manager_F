import React from "react";
import classes from "../css-modules/LoginBack.module.css";

function LoginBack() {
  return (
    <div className={classes.col}>
      <div className={classes.frame}>
        <div className={classes.title}>CASE REGISTRAR</div>
        <p className={classes.par}>Open book to record the cases progress and share updates</p>
        <button className={classes.btn_login}>LOGIN</button>
      </div>
    </div>
  );
}

export default LoginBack;
