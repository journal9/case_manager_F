import React from "react";
import classes from "../css-modules/CasesRight.module.css";

function CasesRight() {
  return (
    <div className={classes.cases}>
      <br></br>
      <div className={classes.nav}>
        <div className={classes.options}>ALL</div>
        <div className={classes.options}>OPENED</div>
        <div className={classes.options}>CLOSED</div>
      </div>
    </div>
  );
}

export default CasesRight;
