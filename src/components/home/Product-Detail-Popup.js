import React from "react";
import { Link } from "react-router-dom";

export default function ProductDetailPopup() {
  return (
    <div>
      {/* <!-- product-details-popup start --> */}
      <section id="product-details-popup" className="product-details-popup">
        <div
          className="modal-overlay"
          //  onClick="closeModal()"
        ></div>
        <div className="container">
          <div className="product-zoom-info-container">
            <div
              id="closed-modal"
              className="closed-modal"
              // onClick="closeModal()"
            >
              X
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="product-zoom-area">
                  <span className="batch">30%</span>
                  <div className="cart-btn-toggle d-lg-none">
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
                  <div className="product-slick">
                    <div>
                      <img
                        src="assets/images/product-detail/01.jpg"
                        alt=""
                        className="img-fluid blur-up lazyload image_zoom_cls-0"
                      />
                    </div>
                    <div>
                      <img
                        src="assets/images/product-detail/02.jpg"
                        alt=""
                        className="img-fluid blur-up lazyload image_zoom_cls-1"
                      />
                    </div>
                    <div>
                      <img
                        src="assets/images/product-detail/03.jpg"
                        alt=""
                        className="img-fluid blur-up lazyload image_zoom_cls-2"
                      />
                    </div>
                    <div>
                      <img
                        src="assets/images/product-detail/01.jpg"
                        alt=""
                        className="img-fluid blur-up lazyload image_zoom_cls-3"
                      />
                    </div>
                    {/* <!-- <div><img src="assets/images/product-detail/02.jpg" alt=""
                                    className="img-fluid blur-up lazyload image_zoom_cls-4"></div> --> */}
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="slider-nav">
                        <div>
                          <img
                            src="assets/images/product-detail/01.jpg"
                            alt=""
                            className="img-fluid blur-up lazyload"
                          />
                        </div>
                        <div>
                          <img
                            src="assets/images/product-detail/02.jpg"
                            alt=""
                            className="img-fluid blur-up lazyload"
                          />
                        </div>
                        <div>
                          <img
                            src="assets/images/product-detail/03.jpg"
                            alt=""
                            className="img-fluid blur-up lazyload"
                          />
                        </div>
                        <div>
                          <img
                            src="assets/images/product-detail/01.jpg"
                            alt=""
                            className="img-fluid blur-up lazyload"
                          />
                        </div>
                        {/* <!-- <div><img src="assets/images/product-detail/02.jpg" alt=""
                                            className="img-fluid blur-up lazyload"></div> --> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product-details-content">
                  <Link className="wish-link" to="#">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="heart"
                      className="svg-inline--fa fa-heart fa-w-16"
                      xmlns="http://www.w3.org/2000/svg"
                      //viewbox="0 0 512 512"
                    >
                      <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
                    </svg>
                  </Link>
                  <Link to="#" className="cata">
                    Catagory
                  </Link>
                  <h2>Product Title Here</h2>
                  <p className="quantity">1kg</p>
                  <h3 className="price">
                    $329 <del>$400</del>
                  </h3>
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penas et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem.
                  </p>
                  <div className="d-flex justify-content-end">
                    <Link to="#" className="buy-now">
                      Buy Now
                    </Link>
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
