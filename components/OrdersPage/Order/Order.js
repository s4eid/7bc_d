import React from "react";
import order from "./order.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faTruck,
  faCheckCircle,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Order({ o }) {
  const parsedD = JSON.parse(o.created_at);
  const _date = new Date(parsedD).toLocaleDateString();
  const router = useRouter();
  return (
    <div
      className={order.mainContainer}
      onClick={() => router.push(`/orders/${o.order_id}`)}
    >
      <div className={order.productC}>
        <p>{o.email}</p>
      </div>
      <div className={order.priceC}>
        <p>{o.paid_price}$</p>
      </div>
      <div className={order.statusC}>
        {o.status === 0 ? (
          <FontAwesomeIcon icon={faBoxOpen} />
        ) : o.status === 1 ? (
          <FontAwesomeIcon icon={faTruck} />
        ) : o.status == 3 ? (
          <FontAwesomeIcon icon={faCheckCircle} />
        ) : (
          <FontAwesomeIcon icon={faCircle} />
        )}
      </div>
      <div className={order.dateC}>
        <p>{_date}</p>
      </div>
    </div>
  );
}
