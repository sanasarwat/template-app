import React from "react";

export default function CategoryCards(props) {
  const { title, icon } = props.category;
  return (
    <div>
      <div class="swiper-slide">
        <a href="product-list.html" class="catagory-item">
          <div class="catagory-icon">{icon}</div>
          <p class="catagory-name">{title}</p>
        </a>
      </div>
    </div>
  );
}
