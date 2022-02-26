import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProducts {
    products {
      name
      price
      img_1
      width
      height
      product_id
    }
  }
`;
