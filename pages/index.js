import Nav from "../Layouts/Nav/Nav";
import Footer from "../Layouts/Footer/Footer";
import HomePage from "../components/HomePage/HomePage";
import { initializeApollo } from "../apolloConfig/apollo";
import { GET_STATUS } from "../graphql_f/status/Query/getStatus";
import { useQuery } from "@apollo/client/react";
export default function Home() {
  const { data, loading } = useQuery(GET_STATUS);
  return !loading ? <HomePage status={data.status} /> : <>loading</>;
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
  const client = await initializeApollo();
  await client.query({
    query: GET_STATUS,
  });
  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
  };
}

Home.Nav = Nav;
Home.Footer = Footer;
