import { gql } from "@apollo/client";

export const SEARCH_ORDER = gql`
  query ($email: String!) {
    searchOrder(email: $email) {
      status
      email
      created_at
      paid_price
      order_id
    }
  }
`;
