import React from "react";

export default function DeliverySchedule() {
  return (
    <div>
      <div className="form-item time-schedule bg-color-white box-shadow p-3 p-lg-5 border-radius5">
        <h6>Delivery Schedule</h6>

        <div className="time-schedule-container">
          <p className="title">Express-Delivery</p>
          <div className="time-schedule-box">
            <ul>
              <li>Monday</li>
              <li>11/11/2021</li>
              <li>8.00AM - 10.00AM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
