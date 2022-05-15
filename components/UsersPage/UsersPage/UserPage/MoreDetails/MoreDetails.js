import React from "react";
import moreDetails from "./moreDetails.module.css";

export default function MoreDetails({
  country,
  city,
  zip_code,
  area,
  ip,
  address,
  expire_m,
  expire_y,
  card_number,
  card_family,
  card_type,
  card_association,
  phone_number,
  cvv,
  owner,
}) {
  return (
    <div className={moreDetails.mainContainer}>
      <div className={moreDetails.holderC}>
        <div className={moreDetails.titleC}>
          <p>Card</p>
        </div>
        <div className={moreDetails.infoC}>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Card Type:</p>
            <p className={moreDetails.aContainer}>{card_type}</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Card Association:</p>
            <p className={moreDetails.aContainer}>{card_type}</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Card Family:</p>
            <p className={moreDetails.aContainer}>{card_family}</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Owner:</p>
            <p className={moreDetails.aContainer}>{owner}</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Card_number:</p>
            <p className={moreDetails.aContainer}>{card_number}</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Expire_m:</p>
            <p className={moreDetails.aContainer}>{expire_m}</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Expire_y:</p>
            <p className={moreDetails.aContainer}>{expire_y}</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Cvv:</p>
            <p className={moreDetails.aContainer}>{cvv}</p>
          </div>
          {/* <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Company:</p>
            <p className={moreDetails.aContainer}>{company}</p>
          </div> */}
        </div>
      </div>
      <div className={moreDetails.holderC}>
        <div className={moreDetails.titleC}>
          <p>Address</p>
        </div>
        <div className={moreDetails.infoC}>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Country:</p>
            <p className={moreDetails.aContainer}>{country}</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>City:</p>
            <p className={moreDetails.aContainer}>{city}</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Area:</p>
            <p className={moreDetails.aContainer}>{area}</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>PostalCode:</p>
            <p className={moreDetails.aContainer}>{zip_code}</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Address:</p>
            <p className={moreDetails.aContainer}>{address}</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>ip:</p>
            <p className={moreDetails.aContainer}>{ip}</p>
          </div>
          <div className={moreDetails.holder}>
            <p className={moreDetails.qContainer}>Phone Number:</p>
            <p className={moreDetails.aContainer}>{phone_number}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
