import React, { useState } from "react";
import OurCarpets from "./Carpets/OurCarpets";
import { useLazyQuery } from "@apollo/client";
import Filter from "./Filter/Filter";
import { SEARCH_PRODUCT } from "../../graphql_f/product/Query/searchProduct";
import carpetPage from "./carpets.module.css";
import ProdcutSearch from "../ProductSearch/ProductSearch";

export default function CarpetsPage({ products, pageInfo, refetch }) {
  const [search, setSearch] = useState("");
  const [searchP, { data, loading }] = useLazyQuery(SEARCH_PRODUCT);
  // console.log(data?.searchProduct);
  return (
    <div className={carpetPage.mainContainer}>
      <div className={carpetPage.searchC}>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            searchP({ variables: { text: e.target.value } });
          }}
          className={carpetPage.fieldE}
          placeholder="Search..."
        />
      </div>
      {/* <Filter index={products.length} /> */}
      {data?.searchProduct.length === 0 || !data ? (
        <OurCarpets products={products} pageInfo={pageInfo} refetch={refetch} />
      ) : (
        <ProdcutSearch products={data?.searchProduct} />
      )}
    </div>
  );
}
