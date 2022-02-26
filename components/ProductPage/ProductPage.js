import React from "react";
import Product from "./Product/Product";

export default function ProductPage({ product }) {
  return (
    <>
      <Product p={product} />
    </>
  );
}
