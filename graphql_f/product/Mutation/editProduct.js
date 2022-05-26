import { gql } from "@apollo/client";
export const EDIT_PRODUCT = gql`
  mutation (
    $productId: ID!
    $name: String!
    $price: String!
    $type: String!
    $width: String!
    $height: String!
    $weight: String!
    $pieces: Int!
    $age: Int
    $family: String
    $description: String
    $origin: String
    $made: String
    $material: String
    $shape: String
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
      made: $made
      material: $material
      shape: $shape
    )
  }
`;
