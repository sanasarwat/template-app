import React from "react";
import { Link } from "react-router-dom";
export default function AdminSection() {
  return (
    <div>
      <section className="admin-page-section d-flex align-items-center">
        <div className="aps-wrapper w-100">
          <div className="container">
            <div className="row justify-content-center justify-content-md-start">
              <div className="admin-content-area">
                <div className="admin-thumb">
                  <img src="assets/images/admin/thumb.jpg" alt="" />
                  <Link to="#" className="image-change-option">
                    <i className="fas fa-camera"></i>
                  </Link>
                </div>
                <div className="admin-content">
                  <h4 className="name">Jhone Doe</h4>
                  <p className="desc">Lorem Ipsum is simply dummy text.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
