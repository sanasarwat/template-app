import React from "react";

export default function AccountDetail() {
  return (
    <div>
      <div className="form-item billing-item bg-color-white box-shadow p-3 p-lg-5 border-radius5">
        <h6>User Accounts</h6>
        <form action="#" className="billing-form">
          <div className="row">
            <div className="col-lg-6">
              <div className="input-item">
                <label>First Name*</label>
                <input type="text" name="name" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="input-item">
                <label>Last Name*</label>
                <input type="text" name="name" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-select form-select-md mb-3">
                <label>Country*</label>
                <div className="flux-custom-select">
                  <select className="wide">
                    <option value="0">Country</option>
                    <option value="1">USA</option>
                    <option value="2"> UK</option>
                    <option value="3">Spain</option>
                    <option value="4">Italy</option>
                    <option value="5">Portgal</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="input-item">
                <label>Address*</label>
                <input type="text" name="address" />
                <input type="text" name="address" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="input-item">
                <label>Town or City*</label>
                <div className="flux-custom-select">
                  <select>
                    <option value="0">City</option>
                    <option value="1">British Columbia</option>
                    <option value="2">Manitoba</option>
                    <option value="3">New Brunswick</option>
                    <option value="4">Nova Scotia</option>
                    <option value="5">Ontario</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="input-item">
                <label>Email*</label>
                <input type="text" name="email" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="input-item">
                <label>Mobile*</label>
                <input type="text" name="mobile" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
