import React from "react";

export default function InfoBox() {
  return (
    <div>
      <section className="info-box-section">
        <div className="container">
          <div className="info-box-container">
            <div className="swiper-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="swiper-slide">
                      <div className="info-box-item d-sm-flex text-center text-sm-left">
                        <div className="info-icon">
                          <img
                            src="assets/images/info-item/info.svg"
                            alt="info icon"
                          />
                        </div>
                        <div className="info-content">
                          <h6>Place order</h6>
                          <p>
                            Lorem ipsum dolor sit amet, conse ctetur adipisicing
                            elit, sed do.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="swiper-slide">
                      <div className="info-box-item d-sm-flex text-center text-sm-left">
                        <div className="info-icon">
                          <img
                            src="assets/images/info-item/credit-card.svg"
                            alt="info icon"
                          />
                        </div>
                        <div className="info-content">
                          <h6>Easy Payment</h6>
                          <p>
                            Lorem ipsum dolor sit amet, conse ctetur adipisicing
                            elit, sed do.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="swiper-slide">
                      <div className="info-box-item d-sm-flex text-center text-sm-left">
                        <div className="info-icon">
                          <img
                            src="assets/images/info-item/info.svg"
                            alt="info icon"
                          />
                        </div>
                        <div className="info-content">
                          <h6>First Delevary</h6>
                          <p>
                            Lorem ipsum dolor sit amet, conse ctetur adipisicing
                            elit, sed do.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
