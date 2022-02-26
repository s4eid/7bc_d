import React from "react";
import OrdersPage from "../../components/OrdersPage/OrdersPage";
import Nav from "../../Layouts/Nav/Nav";
import Footer from "../../Layouts/Footer/Footer";

export default function Orders() {
  return <OrdersPage />;
}
Orders.Nav = Nav;
Orders.Footer = Footer;
