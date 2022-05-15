import React from "react";
import users from "./users.module.css";
import { useRouter } from "next/router";
import { faTrash, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DELETE_USER } from "../../../../graphql_f/users/Mutaions/deleteUser";
import { useMutation } from "@apollo/client";

export default function Users({ o }) {
  const [deleteUser] = useMutation(DELETE_USER);
  const router = useRouter();
  return (
    <div className={users.mainContainer}>
      {o.verified ? (
        <div className={users.verifiedCon}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </div>
      ) : (
        <></>
      )}
      <div
        onClick={() => router.push(`/users/clients/${o.user_id}`)}
        className={users.nameHolder}
      >
        <p>{o.email}</p>
      </div>
      <div className={users.emailHolder}>
        <p>{o.name}</p>
      </div>
      <div className={users.idHolder}>
        <p>{o.user_id}</p>
      </div>
      <div
        onClick={() => {
          let deleteOr = confirm("Are You Sure Wanna Delete User?");
          if (deleteOr) {
            deleteUser({
              variables: {
                userId: o.user_id,
              },
              onCompleted: () => {
                router.push("/");
              },
            });
          }
        }}
        className={users.deleteContainer}
      >
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
}
