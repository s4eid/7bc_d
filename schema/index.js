import makeExecutableSchema from "@graphql-tools/schema";
import resolverAdmin from "../graphql/admin/admin_resolver";
import typeAdmin from "../graphql/admin/admin_type";

const schema = makeExecutableSchema({
  typeDefs: [typeAdmin],
  resolvers: [resolverAdmin],
});
export default schema;
