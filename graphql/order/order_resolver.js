import { deleteOrder } from "../../Querys/Order/deleteOrder";
import { getOrder } from "../../Querys/Order/getOrder";
import { getOrders } from "../../Querys/Order/getOrders";
import { order_status } from "../../Querys/Order/order_status";
import { searchOrders } from "../../Querys/Order/searchOrder";

const resolverOrder = {
  Query: {
    async getOrder(_, { order_id }, { pool }) {
      const data = await getOrder(order_id, pool);
      return data;
    },
    async getOrders(_, __, { pool }) {
      const data = await getOrders(pool);
      return data;
    },
    async searchOrder(_, { email }, { pool }) {
      const data = await searchOrders(email, pool);
      return data;
    },
  },
  Mutation: {
    async orderUpdate(_, { order_id, email, status }, { pool }) {
      const data = await order_status(order_id, email, status, pool);
      return data;
    },
    async orderDelete(_, { order_id }, { pool }) {
      const data = await deleteOrder(order_id, pool);
      return data;
    },
  },
};
export default resolverOrder;
