import React from "react";
import ourProduct from "./ourProduct.module.css";
import Carpet from "./Carpet";
export default function OurCarpets({ products }) {
  return (
    <div className={ourProduct.container}>
      {/* <div className={ourCarpets.mainContainer}>
        <p className={ourCarpets.title}>Our Carpets</p>
      </div> */}
      <div className={ourProduct.productMainContainer}>
        {products.map((carpet, index) => (
          <Carpet c={carpet} key={index} />
        ))}
      </div>
      {/* <button className={ourCarpets.more}>More</button> */}
    </div>
  );
}
