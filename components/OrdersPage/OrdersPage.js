import React, { useState } from "react";
import orders from "./orders.module.css";
import Order from "./Order/Order";
// import Info from "./Info/Info";
import Title from "./Title/Title";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_ORDER } from "../../graphql_f/order/Query/searchOrders";

export default function OrdersPage({ _orders }) {
  const [searchOrder, { data, loading }] = useLazyQuery(SEARCH_ORDER);
  const [search, setSearch] = useState("");
  console.log(data);
  return (
    <div className={orders.mainContainer}>
      <input
        className={orders.searchBox}
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
          searchOrder({ variables: { email: e.target.value } });
        }}
        placeholder="Search..."
      />
      {/* <Info /> */}
      <div className={orders.titleContainer}>
        <Title />
      </div>
      {!data?.searchOrder ? (
        <>
          {_orders.map((o, index) => (
            <Order key={index} o={o} />
          ))}
        </>
      ) : (
        <>
          {data.searchOrder.map((o, index) => (
            <Order key={index} o={o} />
          ))}
        </>
      )}
    </div>
  );
}
