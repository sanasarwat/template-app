import React, { useContext } from "react";
import * as GiIcons from "react-icons/gi";
import CartSummary from "./CartSummary";
import { CartContext } from "../../helpers/CartProvider";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

export default function CartBar() {
  const { cartItems, totalCartItems, removeFromCart, updateQuantity } =
    useContext(CartContext);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div id="sitebar-cart">
        <div
          className="sc-head cart-heading d-flex justify-content-between align-items-center"
          style={{
            color: "#59b828",
            fontSize: "16px",
            fontWeight: 700,
            paddingRight: "16px",
          }}
        >
          <div className="cart-count">
            <GiIcons.GiShoppingBag size="2rem" />
            <span>{`${totalCartItems}  Item`}</span>
          </div>
          <span className="close-icon" onClick={handleClose}>
            <i className="fas fa-times" fontSize="2x"></i>
          </span>
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <Grid key={item.id}>
              <div>
                <div
                  className="cart-product-container"
                  style={{ paddingLeft: "20px", paddingRight: "20px" }}
                >
                  <div className="cart-product-item">
                    <div
                      className="close-item d-flex justify-content-end align-items-center"
                      style={{
                        color: "#ff2343",
                        marginTop: "16px",
                        cursor: "pointer",
                      }}
                      onClick={() => removeFromCart(item)}
                    >
                      <i className="fas fa-times"></i>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-6 p-0">
                        <div className="thumb">
                          <Link to="#">
                            <img
                              src={item.image}
                              alt="products"
                              width="140px"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="product-content">
                          <Link to="#" className="product-title">
                            {item.title}
                          </Link>
                          <div className="product-cart-info">
                            {item.cartQuantity} x {`${item.units} | pc`}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-6">
                        <div className="price-increase-decrese-group d-flex">
                          <span className="decrease-btn">
                            <button
                              type="button"
                              className="btn quantity-left-minus"
                              data-type="minus"
                              data-field=""
                              onClick={() => updateQuantity(item, -1)}
                              disabled={item.cartQuantity === 1}
                            >
                              -
                            </button>
                          </span>
                          <input
                            type="text"
                            name="quantity"
                            className="form-controls input-number"
                            value={item.cartQuantity}
                            disabled
                          />

                          <span className="increase">
                            <button
                              type="button"
                              className="btn quantity-right-plus"
                              data-type="plus"
                              data-field=""
                              onClick={() => updateQuantity(item, 1)}
                              disabled={item.cartQuantity === 10}
                            >
                              +
                            </button>
                          </span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="product-price">
                          <del>$8.00</del>
                          <span className="ml-4">{`$${ccyFormat(
                            item.cartQuantity * item.price
                          )}`}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          ))
        ) : (
          <h1>No Item Found!!!</h1>
        )}
      </div>
      <hr />

      <CartSummary />
    </div>
  );
}
