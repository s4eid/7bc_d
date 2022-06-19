import React from "react";
import productSearch from "./productSearch.module.css";
import Product from "./Product";
export default function ProdcutSearch({ products, type }) {
  return (
    <div className={productSearch.container}>
      <div className={productSearch.productMainContainer}>
        {products?.map((carpet, index) => (
          <Product c={carpet} key={index} type={type} />
        ))}
      </div>
    </div>
  );
}
