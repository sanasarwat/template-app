import React from "react";

export default function Banner() {
  return (
    <div>
      {/* <!-- banner-section start --> */}
      <section className="banner-section search-banner d-flex align-items-center">
        <div className="banner-content-area">
          <div className="container">
            <div className="banner-content text-center">
              <h6>Organic and fresh food</h6>
              <h2>
                Get freshness delivered
                <br />
                on your doorstep.
              </h2>
              <div className="banner-search">
                <div className="select-search-option d-md-flex">
                  <div className="flux-custom-select">
                    <select class="wide">
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
                    />
                    <button className="submit-btn">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- banner-section end --> */}
    </div>
  );
}
