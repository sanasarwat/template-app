import React from "react";
import { Link } from "react-router-dom";

export default function OrderList() {
  return (
    <div>
      <div className="order-details">
        <div className="order-details-head">
          <h6>Order Details</h6>
        </div>
        <div className="order-details-container d-none d-md-block">
          <div className="order-details-item d-sm-flex flex-wrap text-center text-sm-left align-items-center justify-content-between">
            <div className="thumb d-sm-flex flex-wrap align-items-center">
              <Link>
                <img
                  src="assets/images/products/cart/03.png"
                  alt="products"
                  to="#"
                />
              </Link>
              <div className="product-content">
                <Link to="#" className="product-title">
                  Daisy Cont Oil
                </Link>
              </div>
            </div>

            <div className="product-content pl-0">
              <div className="product-cart-info">1kg</div>
            </div>
            <div className="product-content pl-0">
              <div className="product-price">
                <del>$8.00</del>
                <span className="ml-4">$5.00</span>
              </div>
            </div>
          </div>

          <div className="order-details-item d-sm-flex flex-wrap text-center text-sm-left align-items-center justify-content-between">
            <div className="thumb d-sm-flex flex-wrap align-items-center">
              <Link>
                <img
                  src="assets/images/products/cart/03.png"
                  to="#"
                  alt="products"
                />
              </Link>
              <div className="product-content">
                <Link to="#" className="product-title">
                  Daisy Cont Oil
                </Link>
              </div>
            </div>

            <div className="product-content pl-0">
              <div className="product-cart-info">1kg</div>
            </div>
            <div className="product-content pl-0">
              <div className="product-price">
                <del>$8.00</del>
                <span className="ml-4">$5.00</span>
              </div>
            </div>
          </div>

          <div className="order-details-item d-sm-flex text-center text-sm-left flex-wrap align-items-center justify-content-between">
            <div className="thumb d-sm-flex flex-wrap align-items-center">
              <Link>
                <img
                  src="assets/images/products/cart/03.png"
                  to="#"
                  alt="products"
                />
              </Link>
              <div className="product-content">
                <Link to="#" className="product-title">
                  Daisy Cont Oil
                </Link>
              </div>
            </div>

            <div className="product-content pl-0">
              <div className="product-cart-info">1kg</div>
            </div>
            <div className="product-content pl-0">
              <div className="product-price">
                <del>$8.00</del>
                <span className="ml-4">$5.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="order-details-container-mobile d-md-none">
          <div className="cart-product-item">
            <div className="row align-items-center">
              <div className="col-5 p-0">
                <div className="thumb">
                  <Link to="#">
                    <img
                      src="assets/images/products/cart/03.png"
                      alt="products"
                      to="#"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-7">
                <div className="product-content">
                  <Link to="#" className="product-title">
                    Daisy Cont Oil
                  </Link>
                  <div className="product-cart-info">1x 31b</div>
                  <div className="product-price">
                    <del>$8.00</del>
                    <span className="ml-4">$5.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cart-product-item">
            <div className="row align-items-center">
              <div className="col-5 p-0">
                <div className="thumb">
                  <Link to="#">
                    <img
                      src="assets/images/products/cart/02.png"
                      alt="products"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-7">
                <div className="product-content">
                  <Link to="#" className="product-title">
                    Daisy Cont Oil
                  </Link>
                  <div className="product-cart-info">1x 31b</div>
                  <div className="product-price">
                    <del>$8.00</del>
                    <span className="ml-4">$5.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cart-product-item">
            <div className="row align-items-center">
              <div className="col-5 p-0">
                <div className="thumb">
                  <Link to="#">
                    <img
                      src="assets/images/product/cart/01.png"
                      alt="products"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-7">
                <div className="product-content">
                  <Link to="#" className="product-title">
                    Daisy Cont Oil
                  </Link>
                  <div className="product-cart-info">1x 31b</div>
                  <div className="product-price">
                    <del>$8.00</del>
                    <span className="ml-4">$5.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
