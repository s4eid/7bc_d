import React from "react";
import OrdersPage from "../../components/OrdersPage/OrdersPage";
import Nav from "../../Layouts/Nav/Nav";
import Footer from "../../Layouts/Footer/Footer";
import { GET_ORDERS } from "../../graphql_f/order/Query/getOrders";
import { initializeApollo } from "../../apolloConfig/apollo";
import { useQuery } from "@apollo/client";

export default function Orders() {
  const { data, error, loading } = useQuery(GET_ORDERS);
  return (
    <>
      {!loading ? <OrdersPage _orders={data.getOrders} /> : <p>loading...</p>}
    </>
  );
}
export async function getServerSideProps({ req, res }) {
  // const user = await getUser_server(token, session?.user);
  const client = await initializeApollo();
  await client.query({
    query: GET_ORDERS,
  });
  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
  };
}
Orders.Nav = Nav;
Orders.Footer = Footer;
