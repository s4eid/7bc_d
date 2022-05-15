import React from "react";
import ourProduct from "./ourProduct.module.css";
import Carpet from "./Carpet";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "../../../Layouts/Loading";
export default function OurCarpets({ products, pageInfo, refetch }) {
  const getMore = (afterCursor, hasMore) => {
    if (hasMore) {
      refetch({
        variables: {
          type: "carpet",
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
      });
    }
  };
  return (
    <div className={ourProduct.container}>
      <InfiniteScroll
        dataLength={products.length}
        next={() => getMore(pageInfo.startCursor, pageInfo.hasNextPage)}
        className={ourProduct.productsHolder}
        hasMore={pageInfo.hasNextPage}
        loader={<Loading />}
        scrollableTarget="scrollableDiv"
      >
        <div className={ourProduct.productMainContainer}>
          {products.map((carpet, index) => (
            <Carpet c={carpet} key={index} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
