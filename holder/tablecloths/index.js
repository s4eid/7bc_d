import React, { useEffect, useState } from "react";
import ProductsPage from "../../components/ProductsPage/ProductsPage";
import Footer from "../../Layouts/Footer/Footer.js";
import Nav from "../../Layouts/Nav/Nav.js";
import { initializeApollo } from "../../apolloConfig/apollo";
import { getProduct_t, getProduct_filter } from "../../Redux/Actions/Product_t";
import { GET_PRODUCTS } from "../../graphql_f/product/Query/getProduct";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Layouts/Loading/index.js";

export default function Tablecloth() {
  const dispatch = useDispatch();
  const products = useSelector((s) => s.products_t);
  const { data, loading, error, fetchMore } = useQuery(GET_PRODUCTS, {
    fetchPolicy: "cache-first",
    variables: {
      type: "tablecloth",
      first: 4,
    },
  });
  const [filter, setFilter] = useState({
    price: null,
    origin: null,
    made: null,
    action: false,
  });
  useEffect(() => {
    if (data?.products.edges.node) {
      if (filter.action == true) {
        dispatch(
          getProduct_filter(data.products.edges.node, data.products.pageInfo)
        );
      } else if (filter.action == false) {
        dispatch(
          getProduct_t(data.products.edges.node, data.products.pageInfo)
        );
      }
    }
  }, [data]);
  return (
    <>
      {!products.loading && !loading ? (
        <ProductsPage
          products={products.products}
          pageInfo={products.pageInfo}
          type="tablecloth"
          filter={filter}
          setFilter={setFilter}
          refetch={fetchMore}
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
    variables: { type: "tablecloth", first: 4 },
  });
  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
    revalidate: 10,
  };
}

Tablecloth.Nav = Nav;
Tablecloth.Footer = Footer;
