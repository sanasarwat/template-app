import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { FilterContext } from "../../helpers/FilterProvider";

export default function CategoryCards(props) {
  const { setSelectedMenu, selectedMenu } = useContext(FilterContext);
  const { title, icon } = props.category;
  let history = useHistory();
  return (
    <div>
      <div className="swiper-slide">
        <Link
          to="/collection"
          onClick={() => setSelectedMenu(title)}
          className="catagory-item"
        >
          <div className="catagory-icon">{icon}</div>
          <p className="catagory-name">{title}</p>
        </Link>
      </div>
    </div>
  );
}
