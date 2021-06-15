import React from "react";
//import { products } from "../../data/products";
import ProductCard from "./ProductCard";

export default function ProductListing(props) {
  const { products } = props;
  return (
    <div>
      <div className="row product-list">
        {products.map((product) => (
          <div key={product.id} className="col-sm-6 col-md-4 col-xl-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
