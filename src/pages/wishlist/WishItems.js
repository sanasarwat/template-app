import React from "react";
import AdminSection from "../../components/profile/AdminSection";
import NavBar from "../../components/profile/NavBar";
import { Link } from "react-router-dom";
export default function WishItems() {
  return (
    <div>
      <AdminSection />
      <section id="dashboard-nav" className="dashboard-section">
        <NavBar />
        <div className="container">
          <div className="dashboard-body wishlist">
            <div className="wishlist-header">
              <h6>Shopping Wishlist</h6>
            </div>
            <div className="wish-list-container">
              <div className="wishlist-item product-item d-flex align-items-center">
                <span className="close-item">
                  <i className="fas fa-times"></i>
                </span>
                <div className="thumb">
                  <Link to="#">
                    <img
                      src="assets/images/products/cart/03.png"
                      alt="products"
                    />
                  </Link>
                </div>
                <div className="product-content">
                  <Link to="/" className="product-title">
                    Daisy Cont Oil
                  </Link>
                  <div className="product-cart-info">1x 31b</div>
                  <div className="product-price">
                    <del>$8.00</del>
                    <span className="ml-4">$5.00</span>
                  </div>
                  <div className="cart-btn-toggle">
                    <span className="cart-btn">
                      <i className="fas fa-shopping-cart"></i> Cart
                    </span>

                    <div className="price-btn">
                      <div className="price-increase-decrese-group d-flex">
                        <span className="decrease-btn">
                          <button
                            type="button"
                            className="btn quantity-left-minus"
                            data-type="minus"
                            data-field=""
                          >
                            -
                          </button>
                        </span>
                        <input
                          type="text"
                          name="quantity"
                          className="form-controls input-number"
                        />
                        <span className="increase">
                          <button
                            type="button"
                            className="btn quantity-right-plus"
                            data-type="plus"
                            data-field=""
                          >
                            +
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
