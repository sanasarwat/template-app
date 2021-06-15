import React from "react";
import { Link, useHistory } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

export default function TopHeader() {
  let history = useHistory();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="header-top">
        <div
          className="
            mobile-header
            d-flex
            justify-content-between
            align-items-center
            d-xl-none
          "
        >
          <div className="all-catagory-option mobile-device">
            <Link className="bar-btn">
              <i className="fas fa-bars"></i>
              <span className="ml-2 d-none d-md-inline">All Catagories</span>
            </Link>
            <Link className="close-btn">
              <i className="fas fa-times"></i>
              <span className="ml-2 d-none d-md-inline">All Catagories</span>
            </Link>
          </div>

          <Link to="/" className="logo">
            <img src="assets/images/logo.png" alt="logo" />
          </Link>

          {/* <!-- search select --> */}
          <div className="text-center mobile-search">
            <button
              type="button"
              data-toggle="modal"
              data-target="#search-select-id"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>

          {/* <!-- menubar --> */}
          <div>
            <button
              className="menu-bar"
              type="button"
              data-toggle="modal"
              data-target="#menu-id"
            >
              Home<i className="fas fa-caret-down"></i>
            </button>
          </div>
        </div>
        <div className="d-none d-xl-flex row align-items-center">
          <div className="col-5 col-md-9 col-lg-5">
            <ul
              className="
                site-action
                d-none d-lg-flex
                justify-content-start
                align-items-center
              "
            >
              <li className="site-phone mr-4">
                <Link to="tel:000-000-000">
                  <i className="fas fa-phone"></i> 000 000 000
                </Link>
              </li>
              <li className="site-help">
                <Link to="#">
                  <i className="fas fa-question-circle"></i> Help & More
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-5 col-md-2">
            <Link to="/" className="logo">
              <img src="assets/images/logo.png" alt="logo" />
            </Link>
          </div>
          <div className="col-2 col-md-1 col-lg-5">
            <ul
              className="
                site-action
                d-none d-lg-flex
                justify-content-end
                align-items-center
                ml-auto
              "
            >
              {/* <li className="wish-list mr-4">
                  <Link to="wishlist.html">
                    <i className="fas fa-heart"></i> <span className="count">04</span>
                  </Link>
                </li> */}
              <li className="wish-list mr-4">
                <Link to="/wish-list">
                  <i className="fas fa-heart"></i>
                  <span className="count">04</span>
                </Link>
              </li>
              <li className="my-account item-has-children d-none">
                <Link to="/user-dashborad">
                  <i className="fas fa-user mr-1"></i> My Account
                </Link>
                <ul className="submenu">
                  <li>
                    <Link
                      onClick={() => {
                        history.push("/profile");
                      }}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/signout">Sign Out</Link>
                  </li>
                </ul>
              </li>
              <li className="signin-option">
                <Link onClick={handleClickOpen}>
                  <i className="fas fa-user mr-2"></i>Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <!-- admin Modal --> */}
      <div
        class="modal fade"
        id="useradmin1"
        tabindex="-1"
        aria-labelledby="useradmin1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="header-top-action-dropdown">
                <ul>
                  <li className="signin-option">
                    <Link onClick={handleClickOpen} to="#" data-dismiss="modal">
                      <i className="fas fa-user mr-2"></i>Sign In
                    </Link>
                  </li>
                  <li className="site-phone">
                    <Link to="tel:000-000-000">
                      <i className="fas fa-phone"></i> 000 000 000
                    </Link>
                  </li>
                  <li className="site-help">
                    <Link to="#">
                      <i className="fas fa-question-circle"></i> Help & More
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <section id="login-area" className="login-area">
              <div id="login-area" className="login-area">
                <div>
                  <div className="login-body">
                    <div className="close-icon" onClick={handleClose}>
                      <i className="fas fa-times"></i>
                    </div>
                    <div className="login-header">
                      <h4>Create Your Account</h4>
                      <p>Login with your email & password</p>
                    </div>
                    <div className="login-content">
                      <form action="#" className="login-form">
                        <input type="text" name="name" placeholder="Name" />
                        <input type="email" name="email" placeholder="Email" />
                        <button type="submit" className="submit">
                          Sign Up
                        </button>
                      </form>
                      <div className="text-center seperator">
                        <span>Or</span>
                      </div>
                      <div className="othersignup-option">
                        <Link className="facebook" to="#">
                          <i className="fab fa-facebook-square"></i>Continue
                          with Facebook
                        </Link>
                        <Link className="google" to="#">
                          <i className="fab fa-google-plus"></i>Continue with
                          Google
                        </Link>
                      </div>
                      <div className="text-center dont-account py-4">
                        <p className="mb-0">
                          Don't have any account
                          <Link to="/signup">Sing Up</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="forgot-password text-center">
                    <p>
                      forgot Passowrd? <Link to="/rest">Reset It</Link>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
