import React from "react";
import AdminsPage from "../../../components/UsersPage/AdminsPage/AdminsPage";
import Nav from "../../../Layouts/Nav/Nav";
import Footer from "../../../Layouts/Footer/Footer";

export default function Admins() {
  return <AdminsPage />;
}
Admins.Nav = Nav;
Admins.Footer = Footer;
