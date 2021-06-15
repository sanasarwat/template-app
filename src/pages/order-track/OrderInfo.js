import React from "react";

export default function OrderInfo() {
  return (
    <div>
      <div className="track-order-info">
        <ul className="to-list">
          <li className="d-flex flex-wrap justify-content-between">
            <span className="t-title">Sub Total</span>
            <span className="desc">$2.0</span>
          </li>
          <li className="d-flex flex-wrap justify-content-between">
            <span className="t-title">Delevary Fee</span>
            <span className="desc">$2.0</span>
          </li>
          <li className="d-flex flex-wrap justify-content-between">
            <span className="t-title">Discount</span>
            <span className="desc">$2.0</span>
          </li>
          <li className="inc-vat d-flex flex-wrap justify-content-between">
            <span className="t-title">Total(inc) Vat</span>
            <span className="desc">$2.0</span>
          </li>
        </ul>
      </div>

      <div className="delevary-time">
        <p>Ddelevary Time 10 may, 10am - 12am</p>
      </div>
    </div>
  );
}
