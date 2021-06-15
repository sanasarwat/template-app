import React from "react";
import { Link } from "react-router-dom";
export default function ContactDetail() {
  return (
    <div>
      <div className="form-item contact-number-item bg-color-white box-shadow p-3 p-lg-5 border-radius5">
        <h6>Contact Number</h6>
        <p>
          We need your phone number so we can inform you about any delay or
          problem.
          <br />5 digits code send your phone <strong>+111223366548</strong>
        </p>
        <div className="mb-2">
          <form action="#" className="send-code-form">
            <input type="text" name="code" />
            <button className="submit" type="submit">
              Send Code
            </button>
          </form>
        </div>

        <div>
          <h6>Enter Code</h6>
          <form action="#" className="varify-code-form">
            <input type="text" name="code" />
            <input type="text" name="code" />
            <input type="text" name="code" />
            <input type="text" name="code" />
            <input type="text" name="code" />
            <button className="submit" type="submit">
              Next
            </button>
            <div>
              <Link to="#" className="resend-code">
                Resend Code
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
