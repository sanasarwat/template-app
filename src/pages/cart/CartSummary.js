import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../helpers/CartProvider";

const TAX_RATE = 0.07;
function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

export default function CartSummary() {
  const { cartTotal } = useContext(CartContext);
  const invoiceTaxes = cartTotal * TAX_RATE;
  const invoiceTotal = invoiceTaxes + cartTotal;

  return (
    <div>
      <div class="cart-footer">
        <div class="cart-total">
          <Link to="#">Do you have a voucher?</Link>
          <p class="product-other-charge d-flex justify-content-between">
            <span>SubTotal</span>
            <span>{`${ccyFormat(cartTotal)}`}</span>
          </p>
          <p class="discount d-flex justify-content-between">
            <span>Delevery charge</span>
            <span>$8.00</span>
          </p>
          <p class="discount d-flex justify-content-between">
            <span>Vat Tax(7%)</span>
            <span>{`${ccyFormat(invoiceTaxes)}`}</span>
          </p>
          <p class="discount d-flex justify-content-between">
            <span>Discount</span>
            <span>$8.00</span>
          </p>
          <p class="saving d-flex justify-content-between">
            <span>Total Savings</span>
            <span>$11.00</span>
          </p>
          <p class="total-price d-flex justify-content-between">
            <span>Total</span>
            <span> {`${ccyFormat(invoiceTotal)}`}</span>
          </p>
          <Link to="/checkout" class="procced-checkout">
            Prosecced Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
