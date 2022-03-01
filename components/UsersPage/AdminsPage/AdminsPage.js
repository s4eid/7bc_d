import React from "react";
import admins from "./admins.module.css";
import Info from "./Info/Info";
import Users from "./Users/Users";

export default function AdminsPage({ adminsD }) {
  return (
    <div className={admins.mainContainer}>
      <input className={admins.searchBox} type="text" placeholder="Search..." />
      <Info />
      <div className={admins.usersHolder}>
        {adminsD.map((o) => (
          <Users key={o.admin_id} o={o} />
        ))}
      </div>
      {/* <MoreDetails /> */}
    </div>
  );
}
