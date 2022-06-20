import React from "react";
import Nav from "../../../Layouts/Nav/Nav";
import Footer from "../../../Layouts/Footer/Footer";
import { GET_USERS } from "../../../graphql_f/users/Querys/getUsers";
import UsersPage from "../../../components/UsersPage/UsersPage/UsersPage";
import { initializeApollo } from "../../../apolloConfig/apollo";

export default function Users({ initialApolloState }) {
  return <UsersPage usersD={initialApolloState.ROOT_QUERY.users} />;
}

export async function getServerSideProps({ req }) {
  if (!req.cookies.refreshToken) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const client = initializeApollo();
  await client.query({
    query: GET_USERS,
  });
  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
  };
}

Users.Nav = Nav;
Users.Footer = Footer;
