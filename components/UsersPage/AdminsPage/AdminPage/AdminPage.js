import React from "react";
import Info from "./Info/Info";
import admin from "./admin.module.css";
import MoreDetails from "./MoreDetails/MoreDetails";

export default function AdminPage() {
  return (
    <div className={admin.mainContainer}>
      <div className={admin.container}>
        <Info />
        <MoreDetails />
      </div>
    </div>
  );
}
