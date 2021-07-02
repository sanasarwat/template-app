import React from "react";

export default function AddAddress() {
  return (
    <div>
      {/* <!-- menu modal --> */}
      <div
        className="modal fade address-edit-box"
        id="address-add"
        // tabindex="-1"
        aria-labelledby="address-add"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <h4>Add Your Address</h4>
              <form action="#" className="address-form">
                <div className="input-item">
                  <label>Address Type</label>
                  <input type="text" name="name" placeholder="Home" />
                </div>
                <div className="input-item">
                  <label>Address</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="2548 Broaddus Maple Court Avenue"
                  />
                </div>
                <div className="input-item">
                  <label>City</label>
                  <div className="flux-custom-select">
                    <select>
                      <option value="0">Alberta</option>
                      <option value="1">British Columbia</option>
                      <option value="2">Manitoba</option>
                      <option value="3">New Brunswick</option>
                      <option value="4">Nova Scotia</option>
                      <option value="5">Ontario</option>
                    </select>
                  </div>
                </div>
                <div className="input-item">
                  <label>State</label>
                  {/* <!-- <input type="text" name="name" placeholder="Sun fransico"> --> */}
                  <div className="flux-custom-select">
                    <select>
                      <option value="0">Nunavut</option>
                      <option value="1">Northwest Territories</option>
                      <option value="2"> Ontario</option>
                      <option value="3">British Columbia</option>
                      <option value="4">Nova Scotia</option>
                      <option value="5">Prince Edward Island</option>
                    </select>
                  </div>
                </div>
                <div className="input-item">
                  <label>zip</label>
                  <input type="text" name="name" placeholder="9847" />
                </div>
                <div className="input-item">
                  <label>Country</label>
                  {/* <!-- <input type="text" name="name" placeholder="USA"> --> */}
                  <div className="flux-custom-select">
                    <select>
                      <option value="0">Canada</option>
                      <option value="1">USA</option>
                      <option value="2"> UK</option>
                      <option value="3">Spain</option>
                      <option value="4">Italy</option>
                      <option value="5">Portgal</option>
                    </select>
                  </div>
                </div>
                <div>
                  <button className="submit">Save</button>
                  <button data-dismiss="modal" className="cancel">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
