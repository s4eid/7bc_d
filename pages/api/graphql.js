import { ApolloServer, gql } from "apollo-server-micro";
import Cors from "micro-cors";
import { pool } from "../../db/index";
import resolverAdmin from "../../graphql/admin/admin_resolver";
import typeAdmin from "../../graphql/admin/admin_type";
import typeUser from "../../graphql/user/user_type";
import resolverUser from "../../graphql/user/user_resolver";
import typeProduct from "../../graphql/product/typeProduct";
import resolverProduct from "../../graphql/product/resolverProduct";
import typeOrder from "../../graphql/order/order_type";
import resolverOrder from "../../graphql/order/order_resolver";
import resolverStatus from "../../graphql/status/resolverStatus";
import typeStatus from "../../graphql/status/typeStatus";

const cors = Cors({
  allowCredentials: true,
});
const apolloServer = new ApolloServer({
  resolvers: [
    resolverAdmin,
    resolverUser,
    resolverProduct,
    resolverOrder,
    resolverStatus,
  ],
  typeDefs: [typeAdmin, typeUser, typeProduct, typeOrder, typeStatus],
  context: async ({ req, res }) => {
    return { pool, req, res };
  },
});

const startServer = apolloServer.start();
export default cors(async (req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;
  await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
