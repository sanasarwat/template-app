import React from "react";

export default function SearchModel() {
  return (
    <div>
      {/* <!--search Modal --> */}
      <div
        className="modal fade"
        id="search-select-id"
        // tabindex="-1"
        aria-labelledby="search-select-id"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="select-search-option">
                <div className="flux-custom-select">
                  <select className="wide nice-select">
                    <option value="0">Select Catagory</option>
                    <option value="1">Vegetables</option>
                    <option value="2">Fruits</option>
                    <option value="3">Salads</option>
                    <option value="4">Fish & Seafood</option>
                    <option value="5">Fresh Meat</option>
                    <option value="6">Health Product</option>
                    <option value="7">Butter & Eggs</option>
                    <option value="8">Oils & Venegar</option>
                    <option value="9">Frozen Food</option>
                    <option value="10">Jam & Honey</option>
                  </select>
                </div>

                <form action="#" className="search-form">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search for Products"
                    style={{ marginTop: "20px" }}
                  />
                  <button
                    className="submit-btn d-md"
                    style={{
                      position: "absolute",
                      right: 0,
                      top: "47px",
                      width: "55px",
                      height: "50%",
                      border: "1px solid #ededed",
                      backgroundColor: "#f8f8f8",
                      color: "#a1b1bc",
                      lineHeight: "50px",
                    }}
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
