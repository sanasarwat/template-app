import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { FilterContext } from "../../helpers/FilterProvider";
import { category } from "../../data/category";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { Dropdown, Selection } from "react-dropdown-now";
import "react-dropdown-now/style.css";

export default function Banner() {
  const { setSearchItem, selectedCategories, setSelectedCategories } =
    useContext(FilterContext);
  let history = useHistory();

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
                    {/* <select
                      value={selectedBrand}
                      // onClick={() => {
                      //   history.push("/collection");
                      // }}
                      onChange={handleBrand}
                      className="wide"
                    >
                      {brands.map((item) => (
                        <option key={item.id} value={item.title}>
                          {item.title}
                        </option>
                      ))}
                    </select> */}
                    <FormControl>
                      <Select
                        className="wide"
                        // labelId="sort-prods"
                        value={selectedCategories}
                        onChange={(e) => setSelectedCategories(e.target.value)}
                        onClick={() => {
                          history.push("/collection");
                        }}
                      >
                        {category.map((item) => (
                          <MenuItem key={item.id} value={item.title}>
                            {item.title}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <form action="#" className="search-form">
                    <input
                      type="text"
                      name="search"
                      placeholder="Search for Products"
                      onChange={(e) => {
                        setSearchItem(e.target.value);
                      }}
                    />
                    <button
                      className="submit-btn"
                      onClick={() => {
                        history.push("/collection");
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
      </section>
      {/* <!-- banner-section end --> */}
    </div>
  );
}
