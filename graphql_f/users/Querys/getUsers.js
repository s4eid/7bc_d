import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query getUsers {
    users {
      user_id
      name
      email
      verified
    }
  }
`;
