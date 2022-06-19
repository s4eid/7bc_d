import React, { useState } from "react";
import OurProducts from "./Products/OurProducts";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_PRODUCT } from "../../graphql_f/product/Query/searchProduct";
import productsPage from "./products.module.css";
import ProdcutSearch from "../ProductSearch/ProductSearch";

export default function ProductsPage({ products, pageInfo, refetch, type }) {
  const [search, setSearch] = useState("");
  const [searchP, { data, loading }] = useLazyQuery(SEARCH_PRODUCT);
  return (
    <div className={productsPage.mainContainer}>
      <div className={productsPage.searchC}>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            searchP({ variables: { text: e.target.value } });
          }}
          className={productsPage.fieldE}
          placeholder="Search..."
        />
      </div>
      {/* <Filter index={products.length} /> */}
      {data?.searchProduct.length === 0 || !data ? (
        <OurProducts
          products={products}
          pageInfo={pageInfo}
          refetch={refetch}
          type={type}
        />
      ) : (
        <ProdcutSearch type={type} products={data?.searchProduct} />
      )}
    </div>
  );
}
