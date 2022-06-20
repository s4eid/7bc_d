import React from "react";
import Nav from "../../../../Layouts/Nav/Nav";
import Footer from "../../../../Layouts/Footer/Footer";
import AdminPage from "../../../../components/UsersPage/AdminsPage/AdminPage/AdminPage";

export default function Admin() {
  return <AdminPage />;
}
export async function getServerSideProps({ req, res, query }) {
  if (!req.cookies.refreshToken) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      // initialApolloState: client.cache.extract(),
    },
  };
}
Admin.Nav = Nav;
Admin.Footer = Footer;
