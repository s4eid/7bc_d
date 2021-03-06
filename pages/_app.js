import "../styles/globals.css";
import React from "react";
import { useApollo } from "../apolloConfig/apollo";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
// import Router from "next/router";
import store from "../Redux/Store/store";
function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  const Nav = Component.Nav ? Component.Nav : React.Fragment;
  const Footer = Component.Footer ? Component.Footer : React.Fragment;
  // Router.events.on("routeChangeStart", (uri) => {
  //   NProgress.start();
  // });
  // Router.events.on("routeChangeComplete", (uri) => {
  //   NProgress.done();
  // });
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <Nav>
          <Footer>
            <Component {...pageProps} />
          </Footer>
        </Nav>
      </Provider>
    </ApolloProvider>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
