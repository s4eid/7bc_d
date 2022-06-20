import React, { useEffect } from "react";
import { GET_PRODUCTS } from "../../graphql_f/product/Query/getProduct";
import ProductsPage from "../../components/ProductsPage/ProductsPage";
import { useQuery } from "@apollo/client";
import { getProduct } from "../../Redux/Actions/Products";
import { initializeApollo } from "../../apolloConfig/apollo";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Layouts/Loading";
import Nav from "../../Layouts/Nav/Nav";
import Footer from "../../Layouts/Footer/Footer";

export default function Carpets() {
  const dispatch = useDispatch();
  const products = useSelector((s) => s.products);
  const { data, loading, error, fetchMore } = useQuery(GET_PRODUCTS, {
    fetchPolicy: "cache-first",
    variables: { type: "carpet", first: 4 },
  });
  useEffect(() => {
    dispatch(getProduct(data.products.edges.node, data.products.pageInfo));
  }, [data]);
  return (
    <>
      {!products.loading && !loading ? (
        <ProductsPage
          products={products.products}
          pageInfo={products.pageInfo}
          refetch={fetchMore}
          type="carpet"
        />
      ) : (
        <Loading />
      )}
    </>
  );
}

export async function getStaticProps() {
  const client = initializeApollo();
  await client.query({
    query: GET_PRODUCTS,
    variables: { type: "carpet", first: 4 },
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
