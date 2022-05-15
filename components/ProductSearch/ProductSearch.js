import React from "react";
import productSearch from "./productSearch.module.css";
import Product from "./Product";
export default function ProdcutSearch({ products }) {
  return (
    <div className={productSearch.container}>
      <div className={productSearch.productMainContainer}>
        {products?.map((carpet, index) => (
          <Product c={carpet} key={index} />
        ))}
      </div>
    </div>
  );
}
