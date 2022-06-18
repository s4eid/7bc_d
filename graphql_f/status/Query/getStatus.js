import { gql } from "@apollo/client";

export const GET_STATUS = gql`
  query {
    status {
      admins
      clients
      completeOrders
      waitingOrders
      recentOrders {
        order_id
        email
        paid_price
      }
      recentMonths {
        count
        month
      }
    }
  }
`;
