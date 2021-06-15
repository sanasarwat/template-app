import React from "react";
import ProductProcess from "../../components/profile/ProductProcess";
import OrderList from "./OrderList";
import OrderInfo from "./OrderInfo";
import TrackFooter from "./TrackFooter";
import { Link, useHistory } from "react-router-dom";

export default function TrackOrderSingle() {
  let history = useHistory();

  return (
    <div>
      <section class="dashboard-section">
        <div class="container">
          <div class="track-order-item bg-color-white">
            <div class="track-order-head">
              <h6>Track Order</h6>
            </div>

            <div
              class="
                  d-flex
                  justify-content-between
                  track-number-link
                  align-items-center
                "
            >
              <div>
                <h6 class="order-number">Order#48376837</h6>
                <p class="date">09/21/2020</p>
                <p class="price">USD 2342</p>
              </div>
              <div>
                <Link
                  onClick={() => {
                    history.push("/order-detail");
                  }}
                  class="order-btn"
                  to="#"
                >
                  Order Details
                </Link>
              </div>
            </div>

            <OrderList />
            <OrderInfo />
            <ProductProcess />

            <TrackFooter />
          </div>
        </div>
      </section>
    </div>
  );
}
