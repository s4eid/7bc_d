import { gql } from "apollo-server-micro";
const typeUser = gql`
  type User {
    user_id: ID!
    name: String!
    email: String!
    password: String!
    created_at: String!
    refresh_token: String
  }
  type addUserAddress {
    user_address_id: ID!
    user_id: ID!
    address: String!
    country: String!
    city: String!
    area: String!
    zip_code: String!
    ip: String!
    created_at: String!
  }
  type addUserPayment {
    user_payment_id: ID!
    owner: String!
    cart_number: String!
    expire_m: Int!
    expire_y: Int!
    cvv: Int!
    company: String
    type: String
    user_id: ID!
  }
  type getUser {
    user_id: ID!
    name: String!
    email: String!
    password: String!
    created_at: String!
    refresh_token: String
    verified: Boolean
    user_payment_id: ID
    owner: String
    card_number: String
    card_type: String
    card_family: String
    card_association: String
    expire_m: Int
    expire_y: Int
    cvv: Int
    phone_number: String
    user_address_id: ID
    address: String
    country: String
    city: String
    area: String
    zip_code: String
    ip: String
  }
  type getUsers {
    email: String!
    user_id: ID!
    name: String!
    verified: Boolean
  }
  type Query {
    users: [getUsers!]
    user(user_id: ID!): getUser
  }
  type Mutation {
    addUser(name: String!, email: String!, password: String!): User!
    deleteUser(user_id: ID!): String
    addUser_address(
      address: String!
      country: String!
      city: String!
      area: String!
      zip_code: String!
      ip: String!
      user_id: ID!
    ): addUserAddress!
    addUser_payment(
      owner: String!
      cart_number: String!
      expire_m: Int!
      expire_y: Int!
      type: String
      cvv: Int!
      company: String
      user_id: ID!
    ): addUserPayment!
  }
`;
export default typeUser;
