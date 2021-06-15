import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { categoryTitles } from "../../data/category";

export default function CategoryFilter(props) {
  const { selectedCategories, setSelectedCategories } = props;

  const onChangeCategory = (category, isChecked) => {
    if (isChecked) setSelectedCategories([...selectedCategories, category]);
    else
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
  };
  return (
    <div>
      <div className="widget">
        <h4 className="widget-title d-none d-lg-block">Catagories</h4>
        <a
          className="widget-title d-lg-none"
          data-toggle="collapse"
          href="#scatagory-widget01"
          role="button"
          aria-expanded="false"
          aria-controls="scatagory-widget01"
        >
          Catagories<i className="fas fa-angle-down"></i>
        </a>

        <div className="widget-wrapper" id="scatagory-widget01">
          <ul className="catagory-menu collapse show" id="catagory-main">
            <li>
              <ul
                className="catagory-submenu collapse show"
                id="catagory-widget-s1"
              >
                <li className="checkbox-item">
                  {categoryTitles.map((category) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedCategories.includes(category)}
                          onChange={(e) =>
                            onChangeCategory(category, e.target.checked)
                          }
                          color="default"
                        />
                      }
                      label={category}
                      key={category}
                    />
                  ))}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
