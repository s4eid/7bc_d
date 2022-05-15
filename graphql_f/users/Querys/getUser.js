import { gql } from "@apollo/client";

export const GET_USER = gql`
  query ($userId: ID!) {
    user(user_id: $userId) {
      name
      user_id
      email
      phone_number
      verified
      address
      country
      city
      area
      zip_code
      ip
      owner
      card_number
      card_association
      card_family
      card_type
      expire_m
      expire_y
      cvv
    }
  }
`;
