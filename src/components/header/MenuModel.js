import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function MenuModel() {
  let history = useHistory();
  return (
    <div>
      {/* <!-- menu modal --> */}
      <div
        className="modal fade"
        id="menu-id"
        tabindex="-1"
        aria-labelledby="menu-id"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <ul className="menu d-xl-flex flex-wrap pl-0 list-unstyled">
                <li className="item-has-children">
                  <Link
                    data-toggle="collapse"
                    to="#mainmenuid1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="catagory-widget1"
                  >
                    <span>Home</span> <i className="fas fa-angle-down"></i>
                  </Link>
                  <ul className="submenu collapse" id="mainmenuid1">
                    <li>
                      <Link to="home-default.html">Home Default</Link>
                    </li>
                    <li>
                      <Link to="index-icon.html">Home Default2</Link>
                    </li>
                    <li>
                      <Link to="index.html">Home Sticky Sidebar</Link>
                    </li>
                    <li>
                      <Link to="home-search.html">Home Search</Link>
                    </li>
                    <li>
                      <Link to="home-slider.html">Home Slider</Link>
                    </li>
                    <li>
                      <Link to="home-slider2.html">Home Slider2</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    to="/collection"
                    onClick={() => {
                      history.push("/collection");
                    }}
                  >
                    New Products
                  </Link>
                </li>
                <li>
                  <Link
                    data-toggle="collapse"
                    to="#megamenu-main"
                    role="button"
                    aria-expanded="false"
                    aria-controls="catagory-widget1"
                  >
                    <span>Featured Products</span>{" "}
                    <i className="fas fa-angle-down"></i>
                  </Link>
                  <ul className=" collapse" id="megamenu-main">
                    <li>
                      <Link
                        data-toggle="collapse"
                        to="#megamenu-main01"
                        role="button"
                        aria-expanded="false"
                        aria-controls="megamenu-main01"
                      >
                        <span>Vegetables</span>{" "}
                        <i className="fas fa-angle-down"></i>
                      </Link>
                      <ul className="submenu collapse" id="megamenu-main01">
                        <li>
                          <Link to="product-list.html">Artichoke.</Link>
                        </li>
                        <li>
                          <Link to="product-list.html">
                            Aubergune(eggpiant)
                          </Link>
                        </li>
                        <li>
                          <Link to="product-list.html">Asparagus</Link>
                        </li>
                        <li>
                          <Link to="product-list.html">
                            Broccoflower(a hyrbid)
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        data-toggle="collapse"
                        to="#megamenu-main02"
                        role="button"
                        aria-expanded="false"
                        aria-controls="megamenu-main02"
                      >
                        <span>Fruits</span>{" "}
                        <i className="fas fa-angle-down"></i>
                      </Link>
                      <ul className="submenu collapse" id="megamenu-main02">
                        <li>
                          <Link to="product-list.html">Artichoke.</Link>
                        </li>
                        <li>
                          <Link to="product-list.html">
                            Aubergune(eggpiant)
                          </Link>
                        </li>
                        <li>
                          <Link to="product-list.html">Asparagus</Link>
                        </li>
                        <li>
                          <Link to="product-list.html">
                            Broccoflower(a hyrbid)
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        data-toggle="collapse"
                        to="#megamenu-main03"
                        role="button"
                        aria-expanded="false"
                        aria-controls="megamenu-main03"
                      >
                        <span>Salads</span>{" "}
                        <i className="fas fa-angle-down"></i>
                      </Link>
                      <ul className="submenu collapse" id="megamenu-main03">
                        <li>
                          <Link to="product-list.html">Artichoke.</Link>
                        </li>
                        <li>
                          <Link to="product-list.html">
                            Aubergune(eggpiant)
                          </Link>
                        </li>
                        <li>
                          <Link to="product-list.html">Asparagus</Link>
                        </li>
                        <li>
                          <Link to="product-list.html">
                            Broccoflower(a hyrbid)
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        data-toggle="collapse"
                        to="#megamenu-main04"
                        role="button"
                        aria-expanded="false"
                        aria-controls="megamenu-main04"
                      >
                        <span>Health Care</span>{" "}
                        <i className="fas fa-angle-down"></i>
                      </Link>
                      <ul className="submenu collapse" id="megamenu-main04">
                        <li>
                          <Link to="product-list.html">Artichoke.</Link>
                        </li>
                        <li>
                          <Link to="product-list.html">
                            Aubergune(eggpiant)
                          </Link>
                        </li>
                        <li>
                          <Link to="product-list.html">Asparagus</Link>
                        </li>
                        <li>
                          <Link to="product-list.html">
                            Broccoflower(a hyrbid)
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="item-has-children">
                  <Link
                    data-toggle="collapse"
                    to="#mainmenuid2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="mainmenuid2"
                  >
                    <span>Pages</span> <i className="fas fa-angle-down"></i>
                  </Link>
                  <ul className="submenu collapse" id="mainmenuid2">
                    <li>
                      <Link to="about.html">About</Link>
                    </li>
                    <li>
                      <Link to="contact.html">Contact</Link>
                    </li>
                    <li>
                      <Link to="product-list.html">Product List</Link>
                    </li>
                    <li>
                      <Link to="product-leftsidebar.html">
                        Product leftsidebar
                      </Link>
                    </li>
                    <li>
                      <Link to="product-fullwidth.html">Product Fullwidth</Link>
                    </li>
                    <li>
                      <Link to="brand-product.html">Brand Page</Link>
                    </li>
                    <li>
                      <Link to="product-detail.html">Product Details</Link>
                    </li>
                    <li>
                      <Link to="faq.html">FAQ</Link>
                    </li>
                    <li>
                      <Link to="checkout.html">Checkout</Link>
                    </li>
                    <li>
                      <Link to="user-dashbord.html">User Dashboard</Link>
                    </li>
                    <li>
                      <Link to="profile.html">Profile</Link>
                    </li>
                    <li>
                      <Link to="track-order.html">Track Order</Link>
                    </li>
                  </ul>
                </li>
                <li className="item-has-children">
                  <Link
                    data-toggle="collapse"
                    to="#mainmenuid3"
                    role="button"
                    aria-expanded="false"
                    aria-controls="mainmenuid3"
                  >
                    <span>Blog</span> <i className="fas fa-angle-down"></i>
                  </Link>
                  <ul className="submenu collapse" id="mainmenuid3">
                    <li>
                      <Link to="blog.html">Blog full width</Link>
                    </li>
                    <li>
                      <Link to="blog-rightsidebar.html">Blog Rightsidebar</Link>
                    </li>
                    <li>
                      <Link to="single.html">Blog Single</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="contact.html">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
