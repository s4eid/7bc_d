import { gql } from "@apollo/client";

export const LOGIN_ADMIN = gql`
  mutation ($email: String!, $password: String!, $token: String!) {
    loginAdmin(email: $email, password: $password, token: $token)
  }
`;
