import React from "react";
import info from "./info.module.css";

export default function Info() {
  return (
    <div className={info.mainContainer}>
      <div className={info.infoHolder}>
        <p className={info.title}>Order id</p>
        <p className={info.infoC}>jdishsif4485ss7fsfd4s4s5</p>
      </div>
      <div className={info.infoHolder}>
        <p className={info.title}>Total</p>
        <p className={info.infoC}>5000$</p>
      </div>
      <div className={info.infoHolder}>
        <p className={info.title}>Date placed</p>
        <p className={info.infoC}>10/9/2021</p>
      </div>
      <div className={info.infoHolder}>
        <p className={info.title}>Status</p>
        <p className={info.infoC}>Delivered in 10/9/2021</p>
      </div>
    </div>
  );
}
