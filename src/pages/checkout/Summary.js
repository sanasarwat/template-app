import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../helpers/CartProvider";
import { Grid } from "@material-ui/core";
const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

export default function Summary() {
  const { cartItems, cartTotal, updateQuantity } = useContext(CartContext);

  const invoiceTaxes = cartTotal * TAX_RATE;
  const invoiceTotal = invoiceTaxes + cartTotal;
  return (
    <div>
      <div className="cart-item sitebar-cart bg-color-white box-shadow p-3 p-lg-5 border-radius5">
        <div className="cart-product-container">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <Grid>
                <div className="cart-product-item">
                  <div className="row align-items-center">
                    <div className="col-6 p-0">
                      <div className="thumb">
                        <Link>
                          <img src={item.image} alt="products" />
                        </Link>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="product-content">
                        <Link className="product-title">{item.title}</Link>
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
              </Grid>
            ))
          ) : (
            <h1>No Item Found!!!</h1>
          )}
        </div>

        <div className="cart-footer">
          <div className="product-other-charge">
            <p className="d-flex justify-content-between">
              <span>Delevery charge</span>
              <span>$8.00</span>
            </p>
          </div>

          <div className="cart-total">
            <p className="font-weight-bold d-flex justify-content-between">
              <span>SubTotal</span>
              <span>{`${ccyFormat(cartTotal)}`}</span>
            </p>
            <p className="saving d-flex justify-content-between">
              <span>Delevery charge</span>
              <span>$8.00</span>
            </p>
            <p className="saving d-flex justify-content-between">
              <span>Vat Tax(7%)</span>
              <span>{`${ccyFormat(invoiceTaxes)}`}</span>
            </p>
            <p className="saving d-flex justify-content-between">
              <span>Total Savings</span>
              <span>$11.00</span>
            </p>
            <p className="total-price d-flex justify-content-between">
              <span>Total</span>
              <span>{`${ccyFormat(invoiceTotal)}`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
