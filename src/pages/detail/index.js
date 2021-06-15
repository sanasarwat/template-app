import React from "react";
import ProductDetail from "./ProductDetail";
import HeaderSection from "../../components/header/HeaderSection";
import Footer from "../../components/Footer";
import CartDrawer from "../cart/CartDrawer";
export default function Detail() {
  return (
    <div>
      <CartDrawer />
      <HeaderSection />
      <ProductDetail />
      <Footer />
    </div>
  );
}
