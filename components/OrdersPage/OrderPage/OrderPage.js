import React from "react";
import orderPage from "./order.module.css";
import Info from "./Info/Info";
import Products from "./Products/Products";
import MoreDetails from "./MoreDetails/MoreDetails";
import { useMutation } from "@apollo/client";
import { UPDATE_ORDER } from "../../../graphql_f/order/Mutation/updateOrder";
import { DELETE_ORDER } from "../../../graphql_f/order/Mutation/deleteOrder";
import { useRouter } from "next/router";

export default function OrderPage({ _order }) {
  const [changeStatus, { loading }] = useMutation(UPDATE_ORDER);
  const [deleteOrder] = useMutation(DELETE_ORDER);
  const router = useRouter();
  return (
    <div className={orderPage.mainC}>
      <div className={orderPage.statusC}>
        <button
          disabled={
            loading ||
            _order.order_info.status === 1 ||
            _order.order_info.status === 3
          }
          onClick={() => {
            let changeS = confirm(
              "Are You Sure Wanna Change Status TO Shipping?"
            );
            if (changeS) {
              changeStatus({
                variables: {
                  orderId: _order.order_info.order_id,
                  email: _order.order_info.email,
                  status: 1,
                },
                onCompleted: () => {
                  router.push("/orders");
                },
              });
            }
          }}
        >
          On Shipping
        </button>
        <button
          disabled={loading || _order.order_info.status === 3}
          onClick={() => {
            let changeS = confirm(
              "Are You Sure Wanna Change Status To Order Delivered?"
            );
            if (changeS) {
              changeStatus({
                variables: {
                  orderId: _order.order_info.order_id,
                  email: _order.order_info.email,
                  status: 3,
                },
                onCompleted: () => {
                  router.push("/orders");
                },
              });
            }
          }}
        >
          Delivered
        </button>
        <button
          onClick={() => {
            let changeS = confirm("Are You Sure Wanna Delete Order?");
            if (changeS) {
              deleteOrder({
                variables: {
                  orderId: _order.order_info.order_id,
                },
                onCompleted: () => {
                  router.push("/orders");
                },
              });
            }
          }}
        >
          Delete Order
        </button>
      </div>
      <div className={orderPage.mainContainer}>
        <Info orderInfo={_order.order_info} />
        <div className={orderPage.productsHolder}>
          {_order.order_items.map((o, index) => (
            <Products key={index} o={o} />
          ))}
        </div>
        <MoreDetails orderInfo={_order.order_info} />
      </div>
    </div>
  );
}
