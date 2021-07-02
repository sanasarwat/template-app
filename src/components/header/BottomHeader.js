import React from "react";
import { Link } from "react-router-dom";
import HeaderCartDrawer from "../../pages/cart/HeaderCartDrawer";
// import { CartContext } from "../../helpers/CartProvider";

export default function BottomHeader() {
  //const [click, setClick] = useState(false);
  // const handleClick = () => {
  //   setClick(!click);
  // };
  // const closeMenu = () => {
  //   setClick(false);
  // };
  return (
    <div>
      <div className="header-bottom">
        <div className="row m-0 align-items-center">
          <div className="col-md-2 p-0 d-none d-xl-block">
            <div className="all-catagory-option">
              {/* <Link onClick={handleClick} className="bar-btn">
                <i className={click ? "fas fa-bars" : "fas fa-times"}></i>All
                Catagories
              </Link> */}

              <Link to="#" className="bar-btn">
                <i className="fas fa-bars"></i>All Catagories
              </Link>
              <Link to="#" className="close-btn">
                <i className="fas fa-times"></i>All Catagories
              </Link>
            </div>
          </div>
          <div className="col-md-10">
            <div className="menu-area d-none d-xl-flex justify-content-between align-items-center">
              <ul className="menu d-xl-flex flex-wrap list-unstyled">
                <li className="item-has-children">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/collection">Products</Link>
                </li>
                <li className="item-has-mega-menu">
                  <Link to="#">
                    Featured Products <i className="fas fa-angle-down"></i>
                  </Link>
                </li>

                <li className="item-has-children">
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
              <ul className="menu-action d-none d-lg-block">
                <li className="cart-option">
                  <HeaderCartDrawer />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- mobile-footer --> */}
      <div
        className="
        mobile-footer
        d-flex
        justify-content-between
        align-items-center
        d-xl-none
      "
      >
        <button
          className="info"
          type="button"
          data-toggle="modal"
          data-target="#siteinfo1"
        >
          <i className="fas fa-info-circle"></i>
        </button>

        <div className="footer-cart">
          <Link
            // onClick="cartopen()"
            to="#"
            className="d-flex align-items-center"
          >
            <HeaderCartDrawer />
          </Link>
        </div>

        <div className="footer-admin-area">
          {/* <span className="user-admin">
            <i className="fas fa-user"></i>
          </span> */}
          <button
            className="user-admin"
            type="button"
            data-toggle="modal"
            data-target="#useradmin1"
          >
            <i className="fas fa-user"></i>
          </button>
        </div>
      </div>
      {/* <!-- mobile-footer --> */}
    </div>
  );
}
