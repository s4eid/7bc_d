import "../styles/globals.css";
import React from "react";
import { useApollo } from "../apolloConfig/apollo";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const Nav = Component.Nav ? Component.Nav : React.Fragment;
  const Footer = Component.Footer ? Component.Footer : React.Fragment;
  return (
    <ApolloProvider client={apolloClient}>
      <Nav>
        <Footer>
          <Component {...pageProps} />
        </Footer>
      </Nav>
    </ApolloProvider>
  );
}

export default MyApp;
