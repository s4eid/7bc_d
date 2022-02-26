import React from "react";
import moreDetails from "./moreDetails.module.css";

export default function MoreDetails() {
  return (
    <div className={moreDetails.mainContainer}>
      <div className={moreDetails.holderC}>
        <div className={moreDetails.titleC}>
          <p>Shipping</p>
        </div>
        <div className={moreDetails.infoC}>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Price:</p>
            <p className={moreDetails.aContainer}>50$</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Company:</p>
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
      <div className={moreDetails.holderC}>
        <div className={moreDetails.titleC}>
          <p>Payment</p>
        </div>
        <div className={moreDetails.infoC}>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>PaidPrice:</p>
            <p className={moreDetails.aContainer}>1500$</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>CartType:</p>
            <p className={moreDetails.aContainer}>Visa</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Cart company:</p>
            <p className={moreDetails.aContainer}>American Express</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Currency:</p>
            <p className={moreDetails.aContainer}>$</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Bin number:</p>
            <p className={moreDetails.aContainer}>45654421</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Convercation Id:</p>
            <p className={moreDetails.aContainer}>fdjsd54fsd5s45</p>
          </div>
        </div>
      </div>
      <div className={moreDetails.holderC}>
        <div className={moreDetails.titleC}>
          <p>User</p>
        </div>
        <div className={moreDetails.infoC}>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Email:</p>
            <p className={moreDetails.aContainer}>
              saeid.noormohammad@gmail.com
            </p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Full name:</p>
            <p className={moreDetails.aContainer}>saeid noormohammad</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Phone number:</p>
            <p className={moreDetails.aContainer}>0556012382</p>
          </div>
        </div>
      </div>
      <div className={moreDetails.holderC}>
        <div className={moreDetails.titleC}>
          <p>Status</p>
        </div>
        <div className={moreDetails.infoC}>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Date Placed:</p>
            <p className={moreDetails.aContainer}>10/9/2021</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Status:</p>
            <p className={moreDetails.aContainer}>Delivered in 10/9/2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}
