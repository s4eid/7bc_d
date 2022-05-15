import React from "react";
import EditCForm from "./EditCForm/EditCForm";

export default function EditProductPage({
  product_id,
  name,
  weight,
  price,
  type,
  family,
  age,
  width,
  height,
  stock,
  origin,
  description,
}) {
  console.log(name);

  return (
    <EditCForm
      product_id={product_id}
      name={name}
      weight={weight}
      price={price}
      type={type}
      family={family}
      age={age}
      width={width}
      height={height}
      stock={stock}
      origin={origin}
      description={description}
    />
  );
}
