import React from "react";
import orders from "./orders.module.css";
import Order from "./Order/Order";
// import Info from "./Info/Info";
import Title from "./Title/Title";
import { ordersItems } from "../../data/ordersItems";

export default function OrdersPage() {
  return (
    <div className={orders.mainContainer}>
      <input className={orders.searchBox} type="text" placeholder="Search..." />
      {/* <Info /> */}
      <div className={orders.titleContainer}>
        <Title />
      </div>
      {ordersItems.map((o, index) => (
        <Order key={index} o={o} />
      ))}
    </div>
  );
}
