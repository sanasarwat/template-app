import React from "react";
import { Link, useHistory } from "react-router-dom";
import OrderList from "./OrderList";
import OrderInfo from "./OrderInfo";
import TrackFooter from "./TrackFooter";

export default function OrderDetail() {
  let history = useHistory();
  return (
    <div>
      <section class="dashboard-section">
        <div class="container">
          <div class="track-order-item bg-color-white">
            <div class="d-flex justify-content-between track-number-link align-items-center">
              <div>
                <h6 class="order-number">Order#48376837</h6>
                <p class="date">09/21/2020</p>
                <p class="price">USD 2342</p>
              </div>
              <div>
                <Link
                  onClick={() => {
                    history.push("/track-order-single");
                  }}
                  class="order-btn"
                  to="#"
                >
                  Track Order
                </Link>
              </div>
            </div>
            <OrderList />
            <OrderInfo />
            <TrackFooter />
          </div>
        </div>
      </section>
    </div>
  );
}
