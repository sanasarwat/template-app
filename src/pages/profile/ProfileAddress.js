import React from "react";

export default function ProfileAddress() {
  return (
    <div>
      <div className="profile-address-book">
        <h3 className="title">Address Book</h3>
        <ul className="address-list">
          <li className="active">
            <span className="icon">
              <i className="fas fa-check-circle"></i>
            </span>
            <div className="address-text">
              <h6>Office</h6>
              <p className="address">
                2548 Broaddus Maple Court Avenue, Madisonville KY 4783, United
                States of America
              </p>
              <p className="country">America</p>
            </div>
            <div className="edit-delete-btn">
              <button
                className="edit"
                type="button"
                data-toggle="modal"
                data-target="#address-edit"
              >
                <i className="fas fa-edit"></i>
              </button>
              <button className="delete">
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </li>

          <li>
            <span className="icon">
              <i className="fas fa-check-circle"></i>
            </span>
            <div className="address-text">
              <h6>Home</h6>
              <p className="address">
                2548 Broaddus Maple Court Avenue, Madisonville KY 4783, United
                States of America
              </p>
              <p className="country">America</p>
            </div>
            <div className="edit-delete-btn">
              <button
                className="edit"
                type="button"
                data-toggle="modal"
                data-target="#address-edit"
              >
                <i className="fas fa-edit"></i>
              </button>
              <button className="delete">
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </li>

          <li>
            <span className="icon">
              <i className="fas fa-check-circle"></i>
            </span>
            <div className="address-text">
              <h6>Office2</h6>
              <p className="address">
                2548 Broaddus Maple Court Avenue, Madisonville KY 4783, United
                States of America
              </p>
              <p className="country">America</p>
            </div>
            <div className="edit-delete-btn">
              <button
                className="edit"
                type="button"
                data-toggle="modal"
                data-target="#address-edit"
              >
                <i className="fas fa-edit"></i>
              </button>
              <button className="delete">
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </li>

          <li>
            <span className="icon">
              <i className="fas fa-check-circle"></i>
            </span>
            <div className="address-text">
              <h6>Home2</h6>
              <p className="address">
                2548 Broaddus Maple Court Avenue, Madisonville KY 4783, United
                States of America
              </p>
              <p className="country">America</p>
            </div>
            <div className="edit-delete-btn">
              <button
                className="edit"
                type="button"
                data-toggle="modal"
                data-target="#address-edit"
              >
                <i className="fas fa-edit"></i>
              </button>
              <button className="delete">
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </li>
          <li className="addnew">
            <button
              type="button"
              data-toggle="modal"
              data-target="#address-add"
              className="add-new-btn"
            >
              Add New Address
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
