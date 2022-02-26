import React from "react";
import moreDetails from "./moreDetails.module.css";

export default function MoreDetails() {
  return (
    <div className={moreDetails.mainContainer}>
      <div className={moreDetails.holderC}>
        <div className={moreDetails.titleC}>
          <p>Cart</p>
        </div>
        <div className={moreDetails.infoC}>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Type:</p>
            <p className={moreDetails.aContainer}>Visa</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Family:</p>
            <p className={moreDetails.aContainer}>Express</p>
          </div>
        </div>
      </div>
      <div className={moreDetails.holderC}>
        <div className={moreDetails.titleC}>
          <p>Address</p>
        </div>
        <div className={moreDetails.infoC}>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Country:</p>
            <p className={moreDetails.aContainer}>Turkey</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>City:</p>
            <p className={moreDetails.aContainer}>Nevsehir</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Area:</p>
            <p className={moreDetails.aContainer}>Merkez</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>PostalCode:</p>
            <p className={moreDetails.aContainer}>50100</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Address:</p>
            <p className={moreDetails.aContainer}>
              Esentepe mah golbar sok no:2 Nevsehir/Merkez
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
