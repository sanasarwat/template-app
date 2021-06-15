import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <section id="login-area" className="login-area">
        <div onClick="CloseSignUpForm()" className="overlay"></div>
        <div className="login-body-wrapper">
          <div className="login-body">
            <div className="close-icon" onClick="CloseSignUpForm()">
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
                  <i className="fab fa-facebook-square"></i>Continue with
                  Facebook
                </Link>
                <Link className="google" to="#">
                  <i className="fab fa-google-plus"></i>Continue with Google
                </Link>
              </div>
              <div className="text-center dont-account py-4">
                <p className="mb-0">
                  Don't have any account <Link to="#">Sing Up</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="forgot-password text-center">
            <p>
              forgot Passowrd? <Link to="#">Reset It</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
