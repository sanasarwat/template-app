import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { CartContext } from "../../helpers/CartProvider";

export default function ProductCard(props) {
  const { id, title, price, category, units, image } = props.product;
  const [qty, setQty] = useState(1);

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(props.product, qty);
    setQty(1);
  };
  return (
    <div>
      <div className="product-item">
        <div className="product-thumb">
          <Link to="#">
            <img src={image} alt="product" />
          </Link>
          <span className="batch sale">Sale</span>
          <Link className="wish-link" to="#">
            <FaIcons.FaHeart />
          </Link>
        </div>
        <div className="product-content">
          <Link to="#" className="cata">
            {category}
          </Link>
          <h6>
            <Link to={`/detail/${id}`} className="product-title">
              {title}
            </Link>
          </h6>
          <p className="quantity">{units} | pc</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="price">
              {`$${price}`} <del>$100.00</del>
            </div>

            <div className="cart-btn-toggle">
              <span className="cart-btn" onClick={handleAddToCart}>
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
  );
}
