import { gql } from "@apollo/client";

export const SEARCH_PRODUCT = gql`
  query ($text: String!) {
    searchProduct(text: $text) {
      name
      made
      type
      product_id
      img_1
    }
  }
`;
