import { gql } from "@apollo/client";
export const DELETE_ORDER = gql`
  mutation ($orderId: ID!) {
    orderDelete(order_id: $orderId)
  }
`;
