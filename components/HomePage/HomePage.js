import React from "react";
import home from "./home.module.css";
import Status from "./Status/Status";
import LastMonths from "./LastMonths/LastMonths";

export default function HomePage({ status }) {
  return (
    <div className={home.mainContainer}>
      <h1>Status</h1>
      <Status statusData={status} />
      <LastMonths chartD={status.recentMonths} />
    </div>
  );
}
