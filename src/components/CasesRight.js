import React from "react";
import classes from "../css-modules/CasesRight.module.css";
import Case from "./Case";

function CasesRight() {
  return (
    <div className={classes.cases}>
      <br></br>
      <div className={classes.nav}>
        <div className={classes.options}>ALL</div>
        <div className={classes.options}>OPENED</div>
        <div className={classes.options}>CLOSED</div>
      </div>
      <div className={classes.listcases}>
        <Case/>
      </div>
    </div>
  );
}

export default CasesRight;
