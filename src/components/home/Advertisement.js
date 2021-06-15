import React from "react";
import { Link } from "react-router-dom";

export default function Advertisement() {
  return (
    <div>
      <div className="advertisement-section pb-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-6">
              <Link to="#">
                <img src="assets/images/advertise/01.jpg" alt="advertisment" />
              </Link>
            </div>
            <div className="col-lg-6">
              <Link to="#">
                <img
                  src="/assets/images/advertise/02.jpg"
                  alt="advertisement"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
