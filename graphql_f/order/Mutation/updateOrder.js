import { gql } from "@apollo/client";
export const UPDATE_ORDER = gql`
  mutation ($orderId: ID!, $email: String!, $status: Int!) {
    orderUpdate(order_id: $orderId, email: $email, status: $status)
  }
`;
