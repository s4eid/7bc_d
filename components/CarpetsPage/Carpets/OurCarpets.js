import React from "react";
import ourProduct from "./ourProduct.module.css";
import Carpet from "./Carpet";
export default function OurCarpets({ products }) {
  return (
    <div className={ourProduct.container}>
      <div className={ourProduct.productMainContainer}>
        {products.map((carpet, index) => (
          <Carpet c={carpet} key={index} />
        ))}
      </div>
    </div>
  );
}
