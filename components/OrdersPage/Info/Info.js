import React from "react";
import info from "./info.module.css";

export default function Info() {
  return (
    <div className={info.mainContainer}>
      <ul className={info.listT}>
        <li>Total orders : 12000</li>
      </ul>
    </div>
  );
}
