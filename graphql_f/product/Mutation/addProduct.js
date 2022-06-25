import { gql } from "@apollo/client";

export const ADD_PRODUCT = gql`
  mutation (
    $name: String!
    $price: String!
    $adminId: ID!
    $type: String!
    $pieces: Int!
    $width: String!
    $height: String!
    $origin: String
    $weight: String!
    $age: Int
    $family: String
    # $main_color: String
    $description: String
    $made: String
    $material: String
    $shape: String
    # $percent: Int!
    # $active: Boolean!
    # $discount_name: String
    $img_1: String!
    # $img1_id: String!
    $img_2: String
    # $img2_id: String
    $img_3: String # $img3_id: String
  ) {
    addProduct(
      name: $name
      price: $price
      admin_id: $adminId
      type: $type
      pieces: $pieces
      weight: $weight
      width: $width
      height: $height
      origin: $origin
      age: $age
      family: $family
      # main_color: $main_color
      description: $description
      made: $made
      material: $material
      shape: $shape
      # percent: $percent
      # active: $active
      # discount_name: $discount_name
      img_1: $img_1
      # img1_id: $img1_id
      img_2: $img_2
      # img2_id: $img2_id
      img_3: $img_3
      # img3_id: $img3_id
    )
  }
`;
