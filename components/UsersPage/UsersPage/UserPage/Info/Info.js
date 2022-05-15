import React from "react";
import info from "./info.module.css";

export default function Info({ name, email, id }) {
  return (
    <div className={info.mainContainer}>
      <div className={info.infoHolder}>
        <p className={info.title}>Email</p>
        <p className={info.infoC}>{email}</p>
      </div>
      <div className={info.infoHolder}>
        <p className={info.title}>Name</p>
        <p className={info.infoC}>{name}</p>
      </div>
      <div className={info.infoHolder}>
        <p className={info.title}>Id</p>
        <p className={info.infoC}>{id}</p>
      </div>
    </div>
  );
}
