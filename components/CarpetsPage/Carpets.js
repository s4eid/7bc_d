import React from "react";
import OurCarpets from "./Carpets/OurCarpets";
import Filter from "./Filter/Filter";

export default function CarpetsPage({ products }) {
  return (
    <>
      <Filter />
      <OurCarpets products={products} />
    </>
  );
}
