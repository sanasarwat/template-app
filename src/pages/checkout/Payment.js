import React from "react";
import { Link } from "react-router-dom";

export default function Payment() {
  const [voucher, setVoucher] = React.useState();
  function handleVoucher() {
    setVoucher(
      <form action="#" className="send-code-form">
        <input type="text" name="code" />
        <button className="submit" type="submit">
          Send Code
        </button>
      </form>
    );
  }
  return (
    <div>
      <div className="form-item payment-item bg-color-white box-shadow p-3 p-lg-5 border-radius5">
        <h6>Payment</h6>

        <form action="#" className="payment-form">
          <div className="input-item radio">
            <input type="radio" name="payment" value="check payment" />
            <label>Check Payment</label>
          </div>

          <div className="input-item radio">
            <input type="radio" name="payment" value="cash on delivary" />
            <label>Cash on delivary</label>
          </div>

          <div className="input-item radio">
            <input type="radio" name="payment" value="paypal" />
            <label>Paypal</label>
          </div>
        </form>
        <div className="payment-image">
          <img src="assets/mages/payment/01.png" alt="payment" />
        </div>
        <div>
          <Link onClick={handleVoucher} to="#">
            Do you have a voucher?
            {voucher}
          </Link>
        </div>
        <div className="text-right">
          <Link to="#" className="place-order-btn">
            Place Order
          </Link>
        </div>
      </div>
    </div>
  );
}
