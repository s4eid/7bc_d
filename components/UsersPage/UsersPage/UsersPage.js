import React from "react";
import users from "./users.module.css";
import Info from "./Info/Info";
import Users from "./Users/Users";

export default function UsersPage({ usersD }) {
  return (
    <div className={users.mainContainer}>
      <input className={users.searchBox} type="text" placeholder="Search..." />
      <Info />
      <div className={users.usersHolder}>
        {usersD.map((o) => (
          <Users key={o.user_id} o={o} />
        ))}
      </div>
    </div>
  );
}
