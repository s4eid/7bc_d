import Image from "next/image";
import React from "react";
import order from "./order.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

export default function Order({ o }) {
  const router = useRouter();
  return (
    <div
      className={order.mainContainer}
      onClick={() => router.push("/orders/1")}
    >
      <div className={order.productC}>
        <p>{o.client}</p>
      </div>
      <div className={order.priceC}>
        <p>{o.price}</p>
      </div>
      <div className={order.statusC}>
        <FontAwesomeIcon icon={faBoxOpen} />
      </div>
    </div>
  );
}
