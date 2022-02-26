import React from "react";
import info from "./info.module.css";

export default function Info() {
  return (
    <div className={info.mainContainer}>
      <div className={info.infoHolder}>
        <p className={info.title}>Email</p>
        <p className={info.infoC}>saeid@gmail.com</p>
      </div>
      <div className={info.infoHolder}>
        <p className={info.title}>Name</p>
        <p className={info.infoC}>saeid noormohammad</p>
      </div>
      <div className={info.infoHolder}>
        <p className={info.title}>Id</p>
        <p className={info.infoC}>ksdaj4d5ksdaf5sd4fs</p>
      </div>
    </div>
  );
}
