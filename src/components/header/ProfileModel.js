import React from "react";

export default function ProfileModel() {
  return (
    <div>
      {/* <!-- admin Modal --> */}
      <div
        className="modal fade"
        id="useradmin1"
        tabindex="-1"
        aria-labelledby="useradmin1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="header-top-action-dropdown">
                <ul className="submenu">
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/signout">Sign Out</Link>
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
