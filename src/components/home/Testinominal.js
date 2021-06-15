import React from "react";

export default function Testinominal() {
  return (
    <div>
      <section className="testimonial-section">
        <div className="container">
          <div className="section-heading">
            <h4 className="heading-title">
              <span className="heading-circle"></span>Testimonial
            </h4>
          </div>

          <div className="section-wrapper">
            <div className="testimonial-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-body">
                    <div className="testi-author-pic">
                      <img
                        src="assets\images\testimonial\author.jpg"
                        alt="author"
                      />
                    </div>
                    <p className="desc">
                      What a load of rubbish bits and bobs pear shaped owt to do
                      with me good tinkety tonk old fruit, car boot my good sir
                      buggered plastered cheeky David, haggle young delinquent
                      say so I said bite your arm off
                    </p>
                    <div className="author-info">
                      <h6 className="name">Jhon Doe</h6>
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Add Arrows --> */}
            <div className="testimonial-slider-btn-group">
              <div className="testimonial-slider-prev">
                {/* <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewbox="0 0 512.008 512.008"
                      style="enable-background: new 0 0 512.008 512.008"
                      xml:space="preserve"
                    >
                      <path
                        style="fill: #2196f3"
                        d="M501.342,245.185H36.424L210.227,71.404c4.093-4.237,3.975-10.99-0.262-15.083 c-4.134-3.992-10.687-3.992-14.82,0l-192,192c-4.171,4.16-4.179,10.914-0.019,15.085c0.006,0.006,0.013,0.013,0.019,0.019l192,192 c4.093,4.237,10.845,4.354,15.083,0.262c4.237-4.093,4.354-10.845,0.262-15.083c-0.086-0.089-0.173-0.176-0.262-0.262 L36.424,266.519h464.917c5.891,0,10.667-4.776,10.667-10.667S507.233,245.185,501.342,245.185z"
                      ></path>
                      <path d="M202.675,458.519c-2.831,0.005-5.548-1.115-7.552-3.115l-192-192c-4.164-4.165-4.164-10.917,0-15.083l192-192 c4.237-4.093,10.99-3.975,15.083,0.262c3.992,4.134,3.992,10.687,0,14.82L25.758,255.852L210.206,440.3 c4.171,4.16,4.179,10.914,0.019,15.085C208.224,457.39,205.508,458.518,202.675,458.519z"></path>
                      <path d="M501.342,266.519H10.675c-5.891,0-10.667-4.776-10.667-10.667s4.776-10.667,10.667-10.667h490.667 c5.891,0,10.667,4.776,10.667,10.667S507.233,266.519,501.342,266.519z"></path>
                    </svg> */}
              </div>
              <div className="testimonial-slider-next">
                {/* <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewbox="0 0 512 512"
                      style="enable-background: new 0 0 512 512"
                      xml:space="preserve"
                    >
                      <path
                        style="fill: #2196f3"
                        d="M511.189,259.954c1.649-3.989,0.731-8.579-2.325-11.627l-192-192 c-4.237-4.093-10.99-3.975-15.083,0.262c-3.992,4.134-3.992,10.687,0,14.82l173.803,173.803H10.667 C4.776,245.213,0,249.989,0,255.88c0,5.891,4.776,10.667,10.667,10.667h464.917L301.803,440.328 c-4.237,4.093-4.355,10.845-0.262,15.083c4.093,4.237,10.845,4.354,15.083,0.262c0.089-0.086,0.176-0.173,0.262-0.262l192-192 C509.872,262.42,510.655,261.246,511.189,259.954z"
                      ></path>
                      <path d="M309.333,458.546c-5.891,0.011-10.675-4.757-10.686-10.648c-0.005-2.84,1.123-5.565,3.134-7.571L486.251,255.88 L301.781,71.432c-4.093-4.237-3.975-10.99,0.262-15.083c4.134-3.992,10.687-3.992,14.82,0l192,192 c4.164,4.165,4.164,10.917,0,15.083l-192,192C314.865,457.426,312.157,458.546,309.333,458.546z"></path>
                      <path d="M501.333,266.546H10.667C4.776,266.546,0,261.771,0,255.88c0-5.891,4.776-10.667,10.667-10.667h490.667 c5.891,0,10.667,4.776,10.667,10.667C512,261.771,507.224,266.546,501.333,266.546z"></path>
                    </svg> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
