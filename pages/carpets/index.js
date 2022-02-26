import React from "react";
import { initializeApollo } from "../../apolloConfig/apollo";
import { GET_PRODUCTS } from "../../graphql_f/product/Query/getProduct";
import CarpetsPage from "../../components/CarpetsPage/Carpets";
import Nav from "../../Layouts/Nav/Nav";
import Footer from "../../Layouts/Footer/Footer";

export default function Carpets({ initialApolloState }) {
  const products = initialApolloState.ROOT_QUERY.products;
  return <CarpetsPage products={products} />;
}

export async function getStaticProps() {
  const client = initializeApollo();
  await client.query({
    query: GET_PRODUCTS,
    // context: {
    //   headers: {
    //     Cookie: req.headers.cookie,
    //   },
    // },
  });
  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
  };
}

Carpets.Nav = Nav;
Carpets.Footer = Footer;
