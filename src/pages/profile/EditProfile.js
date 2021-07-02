import React from "react";

export default function EditProfile() {
  return (
    <div>
      {/* <!-- profile-edit form --> */}
      <div
        className="profile-edit modal"
        id="edit-form1"
        // tabindex="-1"
        aria-labelledby="edit-form1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="profile-edit-container">
              <div className="head text-center">
                <h4 className="title">Edit Your Profile</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas rutrum, <br />
                  augue sit amet ullamcorper mattis
                </p>
              </div>
              <form action="#" className="profile-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="input-item">
                      <label>Your Name</label>
                      <input type="text" name="name" placeholder="Jhone Doe" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-item">
                      <label>Your Email</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="jhondoe@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-item">
                      <label>Your Website</label>
                      <input
                        type="text"
                        name="website"
                        placeholder="jhondoe.com"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-item">
                      <label>Your Mobile</label>
                      <input
                        type="text"
                        name="mobile"
                        placeholder="0001111222"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
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
                  </div>

                  <div className="col-md-6">
                    <div className="input-item">
                      <label>State</label>
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
                  </div>

                  <div className="col-md-6">
                    <div className="input-item">
                      <label>Zip Code</label>
                      <input type="text" name="zipcode" placeholder="94066" />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-item">
                      <label>Country</label>
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
                  </div>
                  <div className="col-md-12">
                    <div className="input-item">
                      <label>White About Your Self</label>
                      <textarea></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="submit">
                      Save
                    </button>
                    <button className="cencel" data-dismiss="modal">
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
