import React from "react";
//import { Link } from "react-router-dom";

export default function AdminModel() {
  return (
    <div>
      {/* <!-- admin Modal --> */}
      <div
        className="modal fade"
        id="useradmin1"
        // tabindex="-1"
        aria-labelledby="useradmin1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="header-top-action-dropdown">
                <ul>
                  <li className="signin-option">
                    <Link data-dismiss="modal" to="#">
                      <i className="fas fa-user mr-2"></i>Sign In
                    </Link>
                  </li>
                  <li className="site-phone">
                    <Link to="tel:000-000-000">
                      <i className="fas fa-phone"></i> 000 000 000
                    </Link>
                  </li>
                  <li className="site-help">
                    <Link to="#">
                      <i className="fas fa-question-circle"></i> Help & More
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
