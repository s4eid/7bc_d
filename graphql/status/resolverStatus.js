import { getStatus } from "../../Querys/status/getStatus";

const resolverStatus = {
  Query: {
    async status(_, __, { pool }) {
      const data = await getStatus(pool);
      return data;
    },
  },
  Mutation: {},
};
export default resolverStatus;
