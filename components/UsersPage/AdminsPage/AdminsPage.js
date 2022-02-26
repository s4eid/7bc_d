import React from "react";
import { usersItems } from "../../../data/usersItems";
import admins from "./admins.module.css";
import Info from "./Info/Info";
import Users from "./Users/Users";

export default function AdminsPage() {
  return (
    <div className={admins.mainContainer}>
      <input className={admins.searchBox} type="text" placeholder="Search..." />
      <Info />
      <div className={admins.usersHolder}>
        {usersItems.map((o, index) => (
          <Users key={index} o={o} />
        ))}
      </div>
      {/* <MoreDetails /> */}
    </div>
  );
}
