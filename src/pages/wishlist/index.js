import React from "react";
import WishItems from "./WishItems";
import HeaderSection from "../../components/header/HeaderSection";
import Footer from "../../components/Footer";
export default function WishList() {
  return (
    <div>
      <HeaderSection />
      <WishItems />
      <Footer />
    </div>
  );
}
