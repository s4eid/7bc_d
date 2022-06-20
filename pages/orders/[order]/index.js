import React from "react";
import Nav from "../../../Layouts/Nav/Nav";
import Footer from "../../../Layouts/Footer/Footer";
import OrderPage from "../../../components/OrdersPage/OrderPage/OrderPage";
import { initializeApollo } from "../../../apolloConfig/apollo";
import { GET_ORDER } from "../../../graphql_f/order/Query/getOrder";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";

export default function Order() {
  const router = useRouter();
  const order_id = router.query.order;
  const { data, error, loading } = useQuery(GET_ORDER, {
    variables: {
      orderId: order_id,
    },
  });
  return (
    <>{!loading ? <OrderPage _order={data.getOrder} /> : <p>loading...</p>}</>
  );
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
  const order_id = query.order;
  const client = await initializeApollo();
  await client.query({
    query: GET_ORDER,
    variables: {
      orderId: order_id,
    },
  });
  return {
    props: {
      // initialApolloState: client.cache.extract(),
    },
  };
}
Order.Nav = Nav;
Order.Footer = Footer;
