import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const sortOptions = [
  { value: "UniLiver", title: "UniLiver" },
  { value: "LU", title: "LU" },
  { value: "ABC", title: "ABC" },
];
export default function BrandFilter(props) {
  const { selectedBrand, setSelectedBrand } = props;
  //console.log(selectedBrand);
  return (
    <div>
      <div className="widget">
        <h4 className="widget-title d-none d-lg-block">Filter by Brand Name</h4>
        <a
          className="widget-title d-lg-none"
          data-toggle="collapse"
          href="#scatagory-widget03"
          role="button"
          aria-expanded="false"
          aria-controls="scatagory-widget03"
        >
          Filte by Brand Name<i className="fas fa-angle-down"></i>
        </a>

        <div className="widget-wrapper" id="scatagory-widget03">
          <FormControl>
            {/* <InputLabel id="sort-prods">Brand By: </InputLabel> */}
            <Select
              labelId="sort-prods"
              value={selectedBrand || "UniLiver"}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              {sortOptions.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
}
