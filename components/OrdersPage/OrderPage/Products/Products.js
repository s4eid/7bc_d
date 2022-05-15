import React from "react";
import Image from "next/image";
import products from "./products.module.css";
import { useRouter } from "next/router";

export default function Products({ o }) {
  const router = useRouter();
  return (
    <div
      className={products.mainContainer}
      onClick={() => router.push(`/carpets/${o.product_id}`)}
    >
      <div className={products.productC}>
        <div className={products.productImage}>
          <Image src={o.img_1} layout="fill" />
        </div>
      </div>
      <div className={products.priceHolder}>
        <p>{o.paid_price}$</p>
      </div>
      <div className={products.quantityHolder}>
        <p>{o.quantity}</p>
      </div>
    </div>
  );
}
