import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer-newsletter">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                <div className="newsletter-heading">
                  <h5>Know it all first</h5>
                </div>
              </div>
              <div
                className="
                    col-md-6
                    d-flex
                    justify-content-center justify-content-md-end
                  "
              >
                <div className="newsletter-form">
                  <input
                    type="text"
                    name="email"
                    placeholder="E-mail Address"
                  />
                  <button className="submit-btn">
                    <ArrowForwardIcon size="large" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-top">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="footer-widget">
                  <Link to="index.html" className="footer-logo">
                    <img src="assets\images\logo.png" alt="logo" />
                  </Link>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod teincididunt ut labore et
                  </p>
                  <ul className="social-media-list d-flex flex-wrap">
                    <li>
                      <Link to="#">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-vimeo-v"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fab fa-pinterest-p"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="footer-widget">
                  <h5 className="footer-title">Product Catalog</h5>
                  <div className="widget-wrapper">
                    <ul>
                      <li>
                        <Link to="product-leftsidebar.html">Fruits</Link>
                      </li>
                      <li>
                        <Link to="product-leftsidebar.html">Salads</Link>
                      </li>
                      <li>
                        <Link to="product-leftsidebar.html">
                          Fish & Seafood
                        </Link>
                      </li>
                      <li>
                        <Link to="product-leftsidebar.html">Fresh Meat</Link>
                      </li>
                      <li>
                        <Link to="product-leftsidebar.html">
                          Health Products
                        </Link>
                      </li>
                      <li>
                        <Link to="product-leftsidebar.html">Butter & Eggs</Link>
                      </li>
                      <li>
                        <Link to="product-leftsidebar.html">
                          Oil & Vinegars
                        </Link>
                      </li>
                      <li>
                        <Link to="product-leftsidebar.html">
                          Health Products
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="footer-widget">
                  <h5 className="footer-title">Useful Links</h5>
                  <div className="widget-wrapper">
                    <ul>
                      <li>
                        <Link to="about.html">About Us</Link>
                      </li>
                      <li>
                        <Link to="product-leftsidebar.html">
                          Featured Products
                        </Link>
                      </li>
                      <li>
                        <Link to="brand-product.html">Offers</Link>
                      </li>
                      <li>
                        <Link to="blog-rightsidebar.html">Blog</Link>
                      </li>
                      <li>
                        <Link to="faq.html">Faq</Link>
                      </li>
                      <li>
                        <Link to="contact.html">Careers</Link>
                      </li>
                      <li>
                        <Link to="contact.html">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="footer-widget">
                  <h5 className="footer-title">Download Apps</h5>
                  <div className="widget-wrapper">
                    <div className="apps-store">
                      <Link to="#">
                        <img
                          src="assets\images\app-store\apple.png"
                          alt="app"
                        />
                      </Link>
                      <Link to="#">
                        <img
                          src="assets\images\app-store\google.png"
                          alt="app"
                        />
                      </Link>
                    </div>
                    <div className="payment-method d-flex flex-wrap">
                      <Link to="#">
                        <img
                          src="assets\images\payment\visa.png"
                          alt="payment"
                        />
                      </Link>
                      <Link to="#">
                        <img
                          src="assets\images\payment\paypal.png"
                          alt="payment"
                        />
                      </Link>
                      <Link to="#">
                        <img
                          src="assets\images\payment\master.png"
                          alt="payment"
                        />
                      </Link>
                      <Link to="#">
                        <img
                          src="assets\images\payment\discover.png"
                          alt="payment"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="row">
              <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                <p className="copyright">
                  Copyright &copy; 2020 <Link to="#">eflux</Link>. All Rights
                  Reserved.
                </p>
              </div>

              <div
                className="
                    col-md-6
                    d-flex
                    justify-content-center justify-content-md-end
                  "
              >
                <ul className="footer-menu d-flex flex-wrap">
                  <li>
                    <Link to="#">Privacy policies</Link>
                  </li>
                  <li>
                    <Link to="#">Coockies</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- footer section --> */}
    </div>
  );
}
