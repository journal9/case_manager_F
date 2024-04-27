import React from "react";
import classes from "../css-modules/PageHeader.module.css";

function PageHeader() {
  return (
    <div className={classes.p_header}>
      <div className={classes.hmb}>
        <button className={classes.out}>LOGOUT</button>
      </div>
    </div>
  );
}

export default PageHeader;
