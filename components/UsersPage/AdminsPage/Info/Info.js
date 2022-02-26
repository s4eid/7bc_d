import React from "react";
import info from "./info.module.css";

export default function Info() {
  return (
    <div className={info.mainContainer}>
      <div className={info.infoHolder}>
        <p className={info.title}>Email</p>
      </div>
      <div className={info.infoHolder}>
        <p className={info.title}>Name</p>
      </div>
      <div className={info.infoHolder}>
        <p className={info.title}>Id</p>
      </div>
    </div>
  );
}
