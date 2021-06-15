import React from "react";

export default function UserProfile() {
  return (
    <div>
      <div className="profile">
        <h5 className="title">
          Your Profile
          <span
            title="Edit Profile"
            id="edit"
            className="edit"
            data-toggle="modal"
            data-target="#edit-form1"
          >
            <i className="fas fa-edit"></i>
          </span>
        </h5>

        <ul className="list-profile-info list-unstyled">
          <li>
            <span className="title">Your Name</span>
            <span className="desc">Jhone Doe</span>
          </li>
          <li>
            <span className="title">Email</span>
            <span className="desc">jhondoe@gmail.com</span>
          </li>
          <li>
            <span className="title">Mobile</span>
            <span className="desc">000 111 122 333</span>
          </li>
          <li>
            <span className="title">Website</span>
            <span className="desc">jhondow.com</span>
          </li>
          <li>
            <span className="title">City</span>
            <span className="desc">San Bruno</span>
          </li>
          <li>
            <span className="title">State</span>
            <span className="desc">California</span>
          </li>
          <li>
            <span className="title">Zip</span>
            <span className="desc">94066</span>
          </li>
          <li>
            <span className="title">Country</span>
            <span className="desc">USA</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
