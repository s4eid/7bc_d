import React, { useState } from "react";
import ourProduct from "./ourProduct.module.css";
import Products from "./Products";
export default function OurProducts({ products, pageInfo, refetch, type }) {
  const [loading, setLoading] = useState(false);
  const getMore = (afterCursor, hasMore) => {
    if (hasMore) {
      refetch({
        variables: {
          type: type,
          afterCursor: afterCursor,
          first: 5,
        },
        updateQuery: (prevResult, { fetchMoreResult }) => {
          fetchMoreResult.products.edges.node = [
            ...prevResult.products.edges.node,
            ...fetchMoreResult.products.edges.node,
          ];
          return fetchMoreResult;
        },
      }).then(() => {
        setLoading(false);
      });
    }
  };
  return (
    <div className={ourProduct.container}>
      <div className={ourProduct.productMainContainer}>
        {products.map((p, index) => (
          <Products type={type} c={p} key={index} />
        ))}
      </div>
      {pageInfo.hasNextPage && !loading ? (
        <button
          className={ourProduct.moreBtn}
          onClick={() => {
            setLoading(true);
            getMore(pageInfo.startCursor, pageInfo.hasNextPage);
          }}
        >
          Load More
        </button>
      ) : loading ? (
        <button disabled={true} className={ourProduct.button}>
          <span className={ourProduct.buttonLoading}> </span>
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
