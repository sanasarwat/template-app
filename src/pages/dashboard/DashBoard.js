import React from "react";
import AdminSection from "../../components/profile/AdminSection";
import NavBar from "../../components/profile/NavBar";
import * as GiIcons from "react-icons/gi";
import * as FaIcons from "react-icons/fa";

import { Link } from "react-router-dom";
export default function DashBoard() {
  return (
    <div>
      <AdminSection />
      <section id="dashboard-nav" className="dashboard-section">
        <NavBar />

        <div className="container">
          <div className="dashboard-body bg-color-white p-4 p-md-5">
            <div className="row">
              <div className="col-12">
                <div className="order-head mb-3">
                  <h5>My Orders</h5>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="orders-container">
                  <div className="order-item">
                    <table className="table table-responsive1">
                      <thead>
                        <tr>
                          <th className="px-3">My Orders</th>
                          <th className="text-center">Items</th>
                          <th className="text-right pr-5">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-3 py-4">
                            <div>
                              <h6 className="order-number">Order#48376837</h6>
                              <p className="date">09/21/2020</p>
                              <p className="price">USD 2342</p>
                            </div>
                          </td>
                          <td className="text-center">
                            <div>02items</div>
                          </td>
                          <td className="text-right pr-5">
                            <div className="pending">pending</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3">
                            <div>
                              <Link to="/track-order-single">Track Order</Link>
                            </div>
                          </td>
                          <td className="text-right px-4" colSpan="2">
                            <div>
                              <Link
                                className="view-details"
                                to="/track-order-single"
                              >
                                View Details
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="order-item">
                    <table className="table table-responsive1">
                      <thead>
                        <tr>
                          <th className="px-3">My Orders</th>
                          <th className="text-center">Items</th>
                          <th className="text-right pr-5">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-3 py-4">
                            <div>
                              <h6 className="order-number">Order#48376837</h6>
                              <p className="date">09/21/2020</p>
                              <p className="price">USD 2342</p>
                            </div>
                          </td>
                          <td className="text-center">
                            <div>02items</div>
                          </td>
                          <td className="text-right pr-5">
                            <div className="done">Done</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3">
                            <div>
                              <Link to="/track-order-single">Track Order</Link>
                            </div>
                          </td>
                          <td className="text-right px-4" colSpan="2">
                            <div>
                              <Link className="view-details" to="/order-detail">
                                View Details
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="order-item">
                    <table className="table table-responsive1">
                      <thead>
                        <tr>
                          <th className="px-3">My Orders</th>
                          <th className="text-center">Items</th>
                          <th className="text-right pr-5">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-3 py-4">
                            <div>
                              <h6 className="order-number">Order#48376837</h6>
                              <p className="date">09/21/2020</p>
                              <p className="price">USD 2342</p>
                            </div>
                          </td>
                          <td className="text-center">
                            <div>02items</div>
                          </td>
                          <td className="text-right pr-5">
                            <div className="done">Done</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3">
                            <div>
                              <Link to="/track-order-single">Track Order</Link>
                            </div>
                          </td>
                          <td className="text-right px-4" colSpan="2">
                            <div>
                              <Link className="view-details" to="/order-detail">
                                View Details
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="wallet-item">
                  <div className="order-item">
                    <table className="table table-responsive1">
                      <thead>
                        <tr>
                          <th className="px-3">My Wallet</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-3 py-4">
                            <div>
                              <p className="my-balance">My Balance</p>
                              <h6 className="credits">Credits $100</h6>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-right px-4">
                            <div>
                              <Link className="view-details" to="/order-detail">
                                View Details
                              </Link>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="rewards">
                  <div className="order-item">
                    <table className="table table-responsive1">
                      <thead>
                        <tr>
                          <th className="px-3" colSpan="3">
                            Rewards
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-3 pb-0 pt-4" colSpan="3">
                            <div className="offer-active">1 Offer Active</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-3 py-4">
                            <Link to="#" className="offre-item active">
                              <div className="icon">
                                <GiIcons.GiReceiveMoney size="2rem" />
                              </div>
                              <p className="offer-name">Cash-Back</p>
                            </Link>
                          </td>
                          <td className="px-3 py-4">
                            <Link to="#" className="offre-item">
                              <div className="icon">
                                <GiIcons.GiMoneyStack size="2rem" />
                              </div>
                              <p className="offer-name">Cash-Back</p>
                            </Link>
                          </td>
                          <td className="px-3 py-4">
                            <Link to="#" className="offre-item">
                              <div className="icon">
                                <FaIcons.FaMoneyCheck size="2rem" />
                              </div>
                              <p className="offer-name">Cash-Back</p>
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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
