import { gql } from "@apollo/client";

export const DELETE_USER = gql`
  mutation ($userId: ID!) {
    deleteUser(user_id: $userId)
  }
`;
