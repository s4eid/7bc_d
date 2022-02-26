import React from "react";
import orderPage from "./order.module.css";
import Info from "./Info/Info";
import { ordersItems } from "../../../data/ordersItems";
import Products from "./Products/Products";
import MoreDetails from "./MoreDetails/MoreDetails";

export default function OrderPage() {
  return (
    <div className={orderPage.mainContainer}>
      <Info />
      <div className={orderPage.productsHolder}>
        {ordersItems.map((o, index) => (
          <Products key={index} o={o} />
        ))}
      </div>
      <MoreDetails />
    </div>
  );
}
