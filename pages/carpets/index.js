import React from "react";
import { initializeApollo } from "../../apolloConfig/apollo";
import { GET_PRODUCTS } from "../../graphql_f/product/Query/getProduct";
import CarpetsPage from "../../components/CarpetsPage/Carpets";
import { useQuery } from "@apollo/client";
import Nav from "../../Layouts/Nav/Nav";
import Footer from "../../Layouts/Footer/Footer";

export default function Carpets({ initialApolloState }) {
  // const { data, loading, error } = useQuery(GET_PRODUCTS);
  const products = initialApolloState.ROOT_QUERY.products;
  return (
    <>{!loading ? <CarpetsPage products={products} /> : <p>loading...</p>}</>
  );
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
