import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function NavBar() {
  let history = useHistory();
  return (
    <div>
      <div className="container">
        <ul className="dashbord-nav d-lg-flex flex-wrap align-items-center justify-content-between">
          <li>
            <Link
              to="#"
              onClick={() => {
                history.push("/user-dashborad");
              }}
            >
              <i className="far fa-list-alt"></i>Your Orders
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="active"
              onClick={() => {
                history.push("/track-order");
              }}
            >
              <i className="fas fa-shipping-fast"></i>Track Orders
            </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={() => {
                history.push("/profile");
              }}
            >
              <i className="far fa-user"></i>Your Profile
            </Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={() => {
                history.push("/wish-list");
              }}
            >
              <i className="far fa-heart"></i>Wish List
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
