import React from "react";

export default function ProductProcess() {
  return (
    <div>
      <div className="product-delevary-process">
        <div className="process-bar">
          <div className="process-bar-active"></div>
          <div className="process-bar-item-container d-flex justify-content-between align-items-center">
            <div className="process-bar-item">
              <div className="process-bar-item-inner active">
                <span className="check-icon">
                  <i className="fas fa-check-circle"></i>
                </span>
                <div className="icon-outer">
                  <div className="icon">
                    <i className="fas fa-people-carry"></i>
                  </div>
                </div>
              </div>
              <div className="name">Placed Order</div>
            </div>

            <div className="process-bar-item">
              <div className="process-bar-item-inner active">
                <span className="check-icon">
                  <i className="fas fa-check-circle"></i>
                </span>
                <div className="icon-outer">
                  <div className="icon">
                    <i className="fas fa-shopping-basket" size="large"></i>
                  </div>
                </div>
              </div>
              <div className="name">Process Warehouse</div>
            </div>

            <div className="process-bar-item">
              <div className="process-bar-item-inner active">
                <span className="check-icon">
                  <i className="fas fa-check-circle"></i>
                </span>
                <div className="icon-outer">
                  <div className="icon">
                    <i className="fas fa-shipping-fast"></i>
                  </div>
                </div>
              </div>
              <div className="name">Shipment</div>
            </div>

            <div className="process-bar-item">
              <div className="process-bar-item-inner">
                <span className="check-icon">
                  <i className="fas fa-check-circle"></i>
                </span>
                <div className="icon-outer">
                  <div className="icon">
                    <i className="fas fa-luggage-cart"></i>
                  </div>
                </div>
              </div>
              <div className="name">Product Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
