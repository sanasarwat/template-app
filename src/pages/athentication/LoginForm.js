import React from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <div>
      {/* <!-- login-area --> */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <section id="login-area" className="login-area">
              <div id="login-area" className="login-area">
                <div>
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
                          Don't have any account <Link to="#">Sing Up</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="forgot-password text-center">
                    <p>
                      forgot Passowrd? <Link to="#">Reset It</Link>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
