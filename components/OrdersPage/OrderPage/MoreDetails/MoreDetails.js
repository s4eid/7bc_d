import React from "react";
import moreDetails from "./moreDetails.module.css";

export default function MoreDetails({ orderInfo }) {
  return (
    <div className={moreDetails.mainContainer}>
      <div className={moreDetails.holderC}>
        <div className={moreDetails.titleC}>
          <p>Shipping</p>
        </div>
        <div className={moreDetails.infoC}>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Price:</p>
            <p className={moreDetails.aContainer}>
              {orderInfo.shipping_price}$
            </p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Company:</p>
            <p className={moreDetails.aContainer}>{orderInfo.company}</p>
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
            <p className={moreDetails.aContainer}>{orderInfo.country}</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>City:</p>
            <p className={moreDetails.aContainer}>{orderInfo.city}</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Area:</p>
            <p className={moreDetails.aContainer}>{orderInfo.area}</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>PostalCode:</p>
            <p className={moreDetails.aContainer}>{orderInfo.zip_code}</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Address:</p>
            <p className={moreDetails.aContainer}>{orderInfo.address}</p>
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
            <p className={moreDetails.aContainer}>{orderInfo.paid_price}$</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>CartType:</p>
            <p className={moreDetails.aContainer}>{orderInfo.card_type}</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Card Family:</p>
            <p className={moreDetails.aContainer}>{orderInfo.card_family}</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Currency:</p>
            <p className={moreDetails.aContainer}>{orderInfo.currency}</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>card number:</p>
            <p className={moreDetails.aContainer}>{orderInfo.card_number}</p>
          </div>
          {/* <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Convercation Id:</p>
            <p className={moreDetails.aContainer}>fdjsd54fsd5s45</p>
          </div> */}
        </div>
      </div>
      <div className={moreDetails.holderC}>
        <div className={moreDetails.titleC}>
          <p>User</p>
        </div>
        <div className={moreDetails.infoC}>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Email:</p>
            <p className={moreDetails.aContainer}>{orderInfo.email}</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Full name:</p>
            <p className={moreDetails.aContainer}>{orderInfo.owner}</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Phone number:</p>
            <p className={moreDetails.aContainer}>{orderInfo.phone_number}</p>
          </div>
        </div>
      </div>
      <div className={moreDetails.holderC}>
        <div className={moreDetails.titleC}>
          <p>Status</p>
        </div>
        <div className={moreDetails.infoC}>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Status:</p>
            <p className={moreDetails.aContainer}>{orderInfo.status}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
