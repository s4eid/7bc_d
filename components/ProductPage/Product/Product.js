import React, { useState } from "react";
import Info from "./Info/Info";
import product from "./product.module.css";
import Slide from "./Slide/Slide";
import EditProductPage from "../EditCarpet/EditCarpetPage";
import { useRouter } from "next/router";
import { DELETE_PRODUCT } from "../../../graphql_f/product/Mutation/deleteProduct";
import { useMutation } from "@apollo/client";

export default function Product({ p }) {
  const [deleteProduct, { data, loading, error }] = useMutation(DELETE_PRODUCT);
  const router = useRouter();
  const [edit, setEdit] = useState(false);
  let imgs = [p.img_1, p.img_2, p.img_3];
  imgs = imgs.filter(function (item) {
    return item !== null;
  });
  return (
    <>
      {!edit ? (
        <div className={product.mainContainer}>
          <div className={product.productBtnC}>
            <button
              onClick={() => {
                setEdit(true);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                let deleteOr = confirm("Are You Sure Wanna Delete Product?");
                if (deleteOr) {
                  deleteProduct({
                    variables: {
                      product_id: p.product_id,
                    },
                    onCompleted: () => {
                      router.push("/carpets");
                    },
                  });
                }
              }}
            >
              Delete
            </button>
          </div>
          <div className={product.title}>
            <p>{p.name}</p>
          </div>
          <div className={product.detailsContainer}>
            <Slide imgs={imgs} />
            <Info
              family={p.family}
              age={p.age}
              width={p.width}
              height={p.height}
              stock={p.pieces}
              origin={p.origin}
              description={p.description}
            />
          </div>
        </div>
      ) : (
        <EditProductPage />
      )}
    </>
  );
}
