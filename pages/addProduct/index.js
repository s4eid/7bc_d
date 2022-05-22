import React from "react";
import AddProductPage from "../../components/AddProductPage/AddProductPage";
import Nav from "../../Layouts/Nav/Nav";
import Footer from "../../Layouts/Footer/Footer";

export default function AddProduct() {
  return <AddProductPage />;
}

AddProduct.Nav = Nav;
AddProduct.Footer = Footer;
