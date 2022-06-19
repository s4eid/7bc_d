import Image from "next/image";
import React from "react";
import productItems from "./productSearch.module.css";
import { useRouter } from "next/router";

export default function Product({ c, type }) {
  const router = useRouter();
  return (
    <div
      className={productItems.productMainHolder}
      onClick={() => router.push(`/${type}s/${c.product_id}`)}
    >
      <div className={productItems.productContainer}>
        <Image src={c.img_1} alt={type} layout="fill" loading="lazy" />
      </div>
      <div className={productItems.detailsContainer}>
        <div className={productItems.infoHolder}>
          <p className={productItems.detailName}>{c.name}</p>
          <p className={productItems.detailSize}>
            {c.width}x{c.height}
          </p>
        </div>
        <div className={productItems.infoHolderP}>
          <p className={productItems.detailPrice}>{c.price}$</p>
        </div>
      </div>
    </div>
  );
}
