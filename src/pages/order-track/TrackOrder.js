import React from "react";
import AdminSection from "../../components/profile/AdminSection";
import NavBar from "../../components/profile/NavBar";
import ProductProcess from "../../components/profile/ProductProcess";
import OrderList from "./OrderList";
import OrderInfo from "./OrderInfo";
import TrackFooter from "./TrackFooter";
import { Link, useHistory } from "react-router-dom";

export default function TrackOrder() {
  let history = useHistory();
  return (
    <div>
      <AdminSection />

      <section id="dashboard-nav" className="dashboard-section">
        <NavBar />

        <div className="container">
          <div className="track-order-item bg-color-white">
            <div className="track-order-head">
              <h6>Track Order</h6>
            </div>
            <div className="d-flex justify-content-between track-number-link align-items-center">
              <div>
                <h6 className="order-number">Order#48376837</h6>
                <p className="date">09/21/2020</p>
                <p className="price">USD 2342</p>
              </div>
              <div>
                <Link
                  onClick={() => {
                    history.push("/order-detail");
                  }}
                  className="order-btn"
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
        <div className="container">
          <div className="track-order-item bg-color-white">
            <div className="track-order-head">
              <h6>Track Order</h6>
            </div>
            <div className="d-flex justify-content-between track-number-link align-items-center">
              <div>
                <h6 className="order-number">Order#48376837</h6>
                <p className="date">09/21/2020</p>
                <p className="price">USD 2342</p>
              </div>
              <div>
                <Link
                  onClick={() => {
                    history.push("/order-detail");
                  }}
                  className="order-btn"
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
