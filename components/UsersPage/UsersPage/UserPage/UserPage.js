import React from "react";
import Info from "./Info/Info";
import user from "./user.module.css";
import MoreDetails from "./MoreDetails/MoreDetails";

export default function UserPage({ userD }) {
  return (
    <div className={user.mainContainer}>
      <div className={user.container}>
        <Info
          email={userD.email}
          id={userD.user_id}
          name={userD.name}
          verified={userD.verified}
        />
        <MoreDetails
          cvv={userD.cvv}
          expire_y={userD.expire_y}
          expire_m={userD.expire_m}
          card_number={userD.card_number}
          owner={userD.owner}
          area={userD.area}
          address={userD.address}
          card_type={userD.card_type}
          card_association={userD.card_association}
          card_family={userD.card_family}
          // type={userD.type}
          // company={userD.company}
          city={userD.city}
          country={userD.country}
          phone_number={userD.phone_number}
          ip={userD.ip}
          zip_code={userD.zip_code}
        />
      </div>
    </div>
  );
}
