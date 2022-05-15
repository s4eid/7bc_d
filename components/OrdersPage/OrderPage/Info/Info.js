import React from "react";
import info from "./info.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faTruck,
  faCheckCircle,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Info({ orderInfo }) {
  const parsedD = JSON.parse(orderInfo.created_at);
  const _date = new Date(parsedD).toLocaleDateString();
  return (
    <div className={info.mainContainer}>
      <div className={info.infoHolder}>
        <p className={info.title}>Order id</p>
        <p className={info.infoC}>{orderInfo.order_id}</p>
      </div>
      <div className={info.infoHolder}>
        <p className={info.title}>Total</p>
        <p className={info.infoC}>{orderInfo.paid_price}$</p>
      </div>
      <div className={info.infoHolder}>
        <p className={info.title}>Date placed</p>
        <p className={info.infoC}>{_date}</p>
      </div>
      <div className={info.infoHolder}>
        <p className={info.title}>Status</p>
        {orderInfo.status === 0 ? (
          <FontAwesomeIcon icon={faBoxOpen} />
        ) : orderInfo.status === 1 ? (
          <FontAwesomeIcon icon={faTruck} />
        ) : orderInfo.status == 3 ? (
          <FontAwesomeIcon icon={faCheckCircle} />
        ) : (
          <FontAwesomeIcon icon={faCircle} />
        )}
        <p className={info.infoC}>{orderInfo.status}</p>
      </div>
    </div>
  );
}
