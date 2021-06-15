import React, { useState, useContext } from "react";
import { getProductById } from "../../data/products";
import { CartContext } from "../../helpers/CartProvider";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

export default function ProductDetail() {
  let { id } = useParams();
  let product = getProductById(id);
  const [qty, setQty] = useState(1);

  const { addToCart, unitsInCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product, qty);
    setQty(1);
  };

  return (
    <div>
      <section className="product-zoom-info-section section-ptb">
        <div className="container">
          <div className="product-zoom-info-container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="product-zoom-area">
                  <span className="batch">30%</span>
                  <div className="product-slick">
                    <div>
                      <img
                        src={product.image}
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
                    {/* <div><img src="assets/images/product-detail/02.jpg" alt=""
                                                className="img-fluid blur-up lazyload image_zoom_cls-4"></div>  */}
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
                        {/* <div><img src="assets/images/product-detail/02.jpg" alt=""
                                                        className="img-fluid blur-up lazyload"></div>  */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product-details-content">
                  <Link className="wish-link" to="#">
                    <FaIcons.FaHeart />
                  </Link>
                  <Link to="#" className="cata">
                    {product.category}
                  </Link>
                  <h2>{product.title}</h2>
                  <p className="quantity">{product.units}kg</p>
                  <h3 className="price">
                    ${product.price * qty} <del>$400</del>
                  </h3>
                  <div className="price-increase-decrese-group d-flex">
                    <span className="decrease-btn">
                      <button
                        type="button"
                        className="btn quantity-left-minus"
                        data-type="minus"
                        data-field=""
                        onClick={() => setQty(qty - 1)}
                        disabled={qty === 1}
                      >
                        -
                      </button>
                    </span>
                    <input
                      type="text"
                      name="quantity"
                      className="form-controls input-number"
                      value={qty}
                    />
                    <span className="increase">
                      <button
                        type="button"
                        className="btn quantity-right-plus"
                        data-type="plus"
                        data-field=""
                        onClick={() => setQty(qty + 1)}
                        disabled={qty === 10}
                      >
                        +
                      </button>
                    </span>
                  </div>
                  <p>{product.description}</p>
                  <div className="d-flex justify-content-end">
                    <Link to="#" className="buy-now" onClick={handleAddToCart}>
                      Buy Now
                    </Link>
                  </div>
                  {!!unitsInCart(product) && (
                    <div mt={2}>
                      <div variant="subtitle2">
                        There are {unitsInCart(product)} units of this item in
                        cart!
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <TabDetail /> */}
    </div>
  );
}
