import React from "react";
import AddProductPage from "../../components/AddProductPage/AddProductPage";
import Nav from "../../Layouts/Nav/Nav";
import Footer from "../../Layouts/Footer/Footer";

export default function AddProduct() {
  return <AddProductPage />;
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

AddProduct.Nav = Nav;
AddProduct.Footer = Footer;
