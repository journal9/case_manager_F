import React from "react";
import PageHeader from "../components/PageHeader";
import Pageback from "../components/Pageback";
import CasesRight from "../components/CasesRight";
import classes from "../css-modules/BoardPage.module.css";

function BoardPage() {
  return (
    <div>
      <PageHeader />
      <div className={classes.page}>
        <Pageback />
        <CasesRight />
      </div>
    </div>
  );
}

export default BoardPage;
