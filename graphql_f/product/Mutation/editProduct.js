import { gql } from "@apollo/client";
export const EDIT_PRODUCT = gql`
  mutation (
    $productId: ID!
    $name: String!
    $price: Int!
    $type: String!
    $width: Int!
    $height: Int!
    $weight: Int!
    $pieces: Int!
    $age: Int
    $family: String
    $description: String
    $origin: String
  ) {
    editProduct(
      product_id: $productId
      name: $name
      price: $price
      type: $type
      width: $width
      height: $height
      weight: $weight
      pieces: $pieces
      age: $age
      family: $family
      description: $description
      origin: $origin
    ) {
      name
    }
  }
`;
