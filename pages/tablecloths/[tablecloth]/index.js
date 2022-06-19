import React from "react";
import ProductPage from "../../../components/ProductPage/ProductPage";
import Nav from "../../../Layouts/Nav/Nav";
import Footer from "../../../Layouts/Footer/Footer";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { initializeApollo } from "../../../apolloConfig/apollo";
import Loading from "../../../Layouts/Loading";
import { GET_PRODUCT } from "../../../graphql_f/product/Query/getOneProduct";
import { GET_PRODUCTS } from "../../../graphql_f/product/Query/getProduct";

export default function Product() {
  const router = useRouter();
  const route = router.query.tablecloth;
  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: { product_id: route },
  });
  return (
    <>
      {!loading ? (
        <ProductPage type="tablecloth" product={data.product} />
      ) : (
        <Loading />
      )}
    </>
  );
}

export async function getServerSideProps(req, res) {
  const product_id = req.params.tablecloth;
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

Product.Nav = Nav;
Product.Footer = Footer;
