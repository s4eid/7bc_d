import { gql } from "apollo-server-micro";
const typeStatus = gql`
  type RecentOrders {
    order_id: ID!
    paid_price: Int!
    email: String!
  }
  type RecentMonths {
    count: Int!
    month: String!
  }
  type Status {
    admins: Int!
    clients: Int!
    completeOrders: Int!
    waitingOrders: Int!
    recentOrders: [RecentOrders]
    recentMonths: [RecentMonths]!
  }
  type Query {
    status: Status!
  }
`;
export default typeStatus;
