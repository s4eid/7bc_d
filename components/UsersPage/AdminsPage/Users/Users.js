import React from "react";
import Image from "next/image";
import users from "./users.module.css";
import { useRouter } from "next/router";

export default function Products({ o }) {
  const router = useRouter();
  return (
    <div
      className={users.mainContainer}
      onClick={() => router.push("/users/admins/1")}
    >
      <div className={users.nameHolder}>
        <p>{o.email}</p>
      </div>
      <div className={users.emailHolder}>
        <p>{o.name}</p>
      </div>
      <div className={users.idHolder}>
        <p>{o.id}</p>
      </div>
    </div>
  );
}
