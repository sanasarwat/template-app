import React, { useContext } from "react";
import * as GiIcons from "react-icons/gi";
import CartSummary from "./CartSummary";
import { CartContext } from "../../helpers/CartProvider";
import { Grid } from "@material-ui/core";

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
          class="sc-head cart-heading d-flex justify-content-between align-items-center"
          style={{
            color: "#59b828",
            fontSize: "16px",
            fontWeight: 700,
            paddingRight: "16px",
          }}
        >
          <div class="cart-count">
            <GiIcons.GiShoppingBag size="2rem" />
            <span>{`${totalCartItems}  Item`}</span>
          </div>
          <span class="close-icon" onClick={handleClose}>
            <i class="fas fa-times" fontSize="2x"></i>
          </span>
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <Grid>
              <div>
                <div
                  class="cart-product-container"
                  style={{ paddingLeft: "20px", paddingRight: "20px" }}
                >
                  <div class="cart-product-item">
                    <div
                      class="close-item d-flex justify-content-end align-items-center"
                      style={{
                        color: "#ff2343",
                        marginTop: "16px",
                        cursor: "pointer",
                      }}
                      onClick={() => removeFromCart(item)}
                    >
                      <i class="fas fa-times"></i>
                    </div>
                    <div class="row align-items-center">
                      <div class="col-6 p-0">
                        <div class="thumb">
                          <a href="#">
                            <img
                              src={item.image}
                              alt="products"
                              width="140px"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="product-content">
                          <a href="#" class="product-title">
                            {item.title}
                          </a>
                          <div class="product-cart-info">
                            {item.cartQuantity} x {`${item.units} | pc`}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row align-items-center">
                      <div class="col-6">
                        <div class="price-increase-decrese-group d-flex">
                          <span class="decrease-btn">
                            <button
                              type="button"
                              class="btn quantity-left-minus"
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
                            class="form-controls input-number"
                            value={item.cartQuantity}
                            disabled
                          />

                          <span class="increase">
                            <button
                              type="button"
                              class="btn quantity-right-plus"
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
                      <div class="col-6">
                        <div class="product-price">
                          <del>$8.00</del>
                          <span class="ml-4">{`$${ccyFormat(
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
