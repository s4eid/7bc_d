import { gql } from "@apollo/client";

export const GET_ORDER = gql`
  query ($orderId: ID!) {
    getOrder(order_id: $orderId) {
      order_info {
        status
        order_id
        shipping_price
        address
        area
        city
        country
        created_at
        phone_number
        currency
        owner
        card_number
        expire_m
        expire_y
        cvv
        paid_price
        card_association
        card_family
        card_type
        price
        fraud_status
        iyzico_commission_fee
        iyzico_commission_rate
        email
        name
      }
      order_items {
        product_id
        quantity
        paid_price
        img_1
      }
    }
  }
`;
