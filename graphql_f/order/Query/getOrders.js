import { gql } from "@apollo/client";

export const GET_ORDERS = gql`
  query {
    getOrders {
      order_id
      status
      paid_price
      created_at
      email
    }
  }
`;
