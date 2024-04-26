import React from "react";
import classes from "../css-modules/Homeheader.module.css";

function Homeheader() {
  return (
    <div className={classes.header}>
      <div className={classes.hmb}>
        <div className={classes.hm}></div>
        <div className={classes.hm}></div>
        <div className={classes.hm}></div>
      </div>
    </div>
  );
}

export default Homeheader;
