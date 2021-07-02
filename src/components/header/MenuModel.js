import React from "react";
import { Link } from "react-router-dom";

export default function MenuModel() {
  return (
    <div>
      {/* <!-- menu modal --> */}
      <div
        className="modal fade"
        id="menu-id"
        // tabindex="-1"
        aria-labelledby="menu-id"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <ul className="menu d-xl-flex flex-wrap pl-0 list-unstyled">
                <li className="item-has-children">
                  <Link
                    data-toggle="collapse"
                    to="/"
                    role="button"
                    aria-expanded="false"
                    aria-controls="catagory-widget1"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/collection">Products</Link>
                </li>
                <li>
                  <Link
                    data-toggle="collapse"
                    to="#megamenu-main"
                    role="button"
                    aria-expanded="false"
                    aria-controls="catagory-widget1"
                  >
                    Featured Products
                  </Link>
                </li>
                <li className="item-has-children">
                  <Link
                    data-toggle="collapse"
                    to="#mainmenuid2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="mainmenuid2"
                  >
                    Pages
                  </Link>
                </li>
                <li className="item-has-children">
                  <Link
                    data-toggle="collapse"
                    to="#mainmenuid3"
                    role="button"
                    aria-expanded="false"
                    aria-controls="mainmenuid3"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
