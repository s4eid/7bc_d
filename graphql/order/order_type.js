import { gql } from "apollo-server-micro";
const typeOrder = gql`
  type OrderItems {
    quantity: Int
    payment_transaction_id: ID
    price: String
    paid_price: String
    img_1: String
    product_id: ID
    transaction_status: String
    iyzico_commission_fee: String
    iyzico_commission_rate: String
  }
  type OrderInfo {
    order_id: ID!
    status: Int!
    created_at: String!
    user_id: ID!
    company: String
    shipping_price: Int
    address: String
    country: String
    city: String
    area: String
    zip_code: String
    ip: String
    phone_number: String
    owner: String
    card_number: String
    expire_m: Int
    expire_y: Int
    cvv: Int
    currency: String
    conversation_id: ID
    paid_price: String
    card_association: String
    card_family: String
    card_type: String
    price: String
    installment: Int
    fraud_status: Int
    iyzico_commission_fee: String
    iyzico_commission_rate: String
    email: String
    name: String
  }
  type getOrdersT {
    order_id: ID!
    status: Int
    created_at: String
    paid_price: String
    email: String
  }

  type OneOrder {
    order_info: OrderInfo
    order_items: [OrderItems]
  }
  type Query {
    getOrder(order_id: ID!): OneOrder
    getOrders: [getOrdersT]!
  }
  type Mutation {
    orderUpdate(order_id: ID!, email: String!, status: Int!): String
    orderDelete(order_id: ID!): String
  }
`;
export default typeOrder;
