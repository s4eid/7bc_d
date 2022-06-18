import React from "react";
import status from "./status.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faCartFlatbed,
  faClock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Status({ statusData }) {
  return (
    <div className={status.mainContainer}>
      <div className={status.holder}>
        <div className={status.title}>
          <FontAwesomeIcon className={status.icon} icon={faCheckSquare} />
          <p>Complete Orders</p>
        </div>
        <p className={status.data}>{statusData.completeOrders}</p>
        <div className={status.title}>
          <FontAwesomeIcon className={status.icon} icon={faClock} />
          <p>Waiting Orders</p>
        </div>
        <p className={status.data}>{statusData.waitingOrders}</p>
      </div>
      <div className={status.holder}>
        <div className={status.title}>
          <FontAwesomeIcon className={status.icon} icon={faCartFlatbed} />
          <p>Recent Orders</p>
        </div>
        <div className={status.resentOrders}>
          {statusData.recentOrders.map((o, index) => (
            <a href={`/orders/${o.order_id}`}>
              <div className={status.resentOrder} key={index}>
                <p className={status.owner}>{o.email.slice(0, 3)}@..com</p>
                <p>{o.paid_price}$</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className={status.holder}>
        <div className={status.title}>
          <FontAwesomeIcon className={status.icon} icon={faUser} />
          <p>Clients</p>
        </div>
        <p className={status.data}>{statusData.clients}</p>
        <div className={status.title}>
          <FontAwesomeIcon className={status.icon} icon={faUser} />
          <p>Admins</p>
        </div>
        <p className={status.data}>{statusData.admins}</p>
      </div>
    </div>
  );
}
