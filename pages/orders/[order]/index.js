import React from "react";
import Nav from "../../../Layouts/Nav/Nav";
import Footer from "../../../Layouts/Footer/Footer";
import OrderPage from "../../../components/OrdersPage/OrderPage/OrderPage";

export default function Order() {
  return <OrderPage />;
}

Order.Nav = Nav;
Order.Footer = Footer;
