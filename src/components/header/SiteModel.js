import React from "react";
import { Link } from "react-router-dom";
export default function SiteModel() {
  return (
    <div>
      {/* <!--siteinfo Modal --> */}
      <div
        className="modal fade"
        id="siteinfo1"
        // tabindex="-1"
        aria-labelledby="siteinfo1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="header-top-action-dropdown">
                <ul>
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
