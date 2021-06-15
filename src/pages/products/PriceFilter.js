import React from "react";

export default function PriceFilter() {
  return (
    <div>
      <div className="widget">
        <h4 className="widget-title d-none d-lg-block">Filter by Price</h4>
        <a
          className="widget-title d-lg-none"
          data-toggle="collapse"
          href="#scatagory-widget02"
          role="button"
          aria-expanded="false"
          aria-controls="scatagory-widget02"
        >
          Filte by Price<i className="fas fa-angle-down"></i>
        </a>

        <div className="widget-wrapper" id="scatagory-widget02">
          <div className="range-slider">
            <input type="text" className="js-range-slider" />
            <input type="submit" className="submit" value="filter" />
          </div>
        </div>
      </div>
    </div>
  );
}
