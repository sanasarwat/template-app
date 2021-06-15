import React from "react";
import { Link } from "react-router-dom";
export default function SiteModel() {
  return (
    <div>
      {/* <!--siteinfo Modal --> */}
      <div
        class="modal fade"
        id="siteinfo1"
        tabindex="-1"
        aria-labelledby="siteinfo1"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <div class="header-top-action-dropdown">
                <ul>
                  <li class="site-phone">
                    <Link to="tel:000-000-000">
                      <i class="fas fa-phone"></i> 000 000 000
                    </Link>
                  </li>
                  <li class="site-help">
                    <Link to="#">
                      <i class="fas fa-question-circle"></i> Help & More
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
