import React from "react";
import { Link } from "react-router-dom";

export default function Advertising() {
  return (
    <div>
      {/* <!-- advertisement-section start --> */}
      <div className="advertisement-section pb-5 pt--100">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Link to="#">
                <img src="assets/images/advertise/10.jpg" alt="advertise" />
              </Link>
            </div>
            <div className="col-lg-4">
              <Link to="#">
                <img src="assets/images/advertise/11.jpg" alt="advertise" />
              </Link>
            </div>
            <div className="col-lg-4">
              <Link to="#">
                <img src="assets/images/advertise/12.jpg" alt="advertise" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- advertisement-section start --> */}
    </div>
  );
}
