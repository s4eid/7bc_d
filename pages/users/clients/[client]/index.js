import React from "react";
import Nav from "../../../../Layouts/Nav/Nav";
import Footer from "../../../../Layouts/Footer/Footer";
import UserPage from "../../../../components/UsersPage/UsersPage/UserPage/UserPage";
import { initializeApollo } from "../../../../apolloConfig/apollo";
import { GET_USER } from "../../../../graphql_f/users/Querys/getUser";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

export default function User() {
  const router = useRouter();
  const route = router.query.client;
  const { data, error, loading } = useQuery(GET_USER, {
    variables: {
      userId: route,
    },
  });
  return <>{!loading ? <UserPage userD={data.user} /> : <></>}</>;
}

export async function getServerSideProps({ req, res }) {
  if (!req.cookies.refreshToken) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const user_id = req.params.client;
  const client = initializeApollo();

  await client.query({
    query: GET_USER,
    variables: { userId: user_id },
  });
  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
  };
}
User.Nav = Nav;
User.Footer = Footer;
