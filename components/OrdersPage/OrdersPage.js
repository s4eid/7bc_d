import React from "react";
import orders from "./orders.module.css";
import Order from "./Order/Order";
// import Info from "./Info/Info";
import Title from "./Title/Title";

export default function OrdersPage({ _orders }) {
  return (
    <div className={orders.mainContainer}>
      <input className={orders.searchBox} type="text" placeholder="Search..." />
      {/* <Info /> */}
      <div className={orders.titleContainer}>
        <Title />
      </div>
      {_orders.map((o, index) => (
        <Order key={index} o={o} />
      ))}
    </div>
  );
}
