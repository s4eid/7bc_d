import React from "react";
import ProductPage from "../../../components/ProductPage/ProductPage";
import Nav from "../../../Layouts/Nav/Nav";
import { initializeApollo } from "../../../apolloConfig/apollo";
import { GET_PRODUCT } from "../../../graphql_f/product/Query/getOneProduct";
import { useQuery } from "@apollo/client";
import Footer from "../../../Layouts/Footer/Footer";
import { useRouter } from "next/router";

export default function Kilim() {
  // const product = initialApolloState.ROOT_QUERY;
  const router = useRouter();
  const route = router.query.kilim;
  const { data, loading } = useQuery(GET_PRODUCT, {
    variables: { product_id: route },
  });
  return <ProductPage type="kilim" product={data.product} />;
}

export async function getServerSideProps(req, res) {
  const product_id = req.params.kilim;
  const client = initializeApollo();
  await client.query({
    query: GET_PRODUCT,
    variables: { product_id },
  });

  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
  };
}

Kilim.Nav = Nav;
Kilim.Footer = Footer;
