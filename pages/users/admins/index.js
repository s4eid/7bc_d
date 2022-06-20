import React from "react";
import AdminsPage from "../../../components/UsersPage/AdminsPage/AdminsPage";
import Nav from "../../../Layouts/Nav/Nav";
import Footer from "../../../Layouts/Footer/Footer";
import { GET_ADMINS } from "../../../graphql_f/admin/Query/getAdmins";
import { initializeApollo } from "../../../apolloConfig/apollo";

export default function Admins({ initialApolloState }) {
  return <AdminsPage adminsD={initialApolloState.ROOT_QUERY.admins} />;
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
    query: GET_ADMINS,
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

Admins.Nav = Nav;
Admins.Footer = Footer;
