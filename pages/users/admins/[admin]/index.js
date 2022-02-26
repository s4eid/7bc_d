import React from "react";
import Nav from "../../../../Layouts/Nav/Nav";
import Footer from "../../../../Layouts/Footer/Footer";
import AdminPage from "../../../../components/UsersPage/AdminsPage/AdminPage/AdminPage";

export default function Admin() {
  return <AdminPage />;
}
Admin.Nav = Nav;
Admin.Footer = Footer;
