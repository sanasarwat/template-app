import React from "react";
import Footer from "../../components/Footer";
import Testinominal from "../../components/home/Testinominal";
import RecommendProducts from "../../components/home/recommended-products";
import TrendingProducts from "../../components/home/trending-products";
import Advertisement from "../../components/home/Advertisement";
import InfoBox from "../../components/home/InfoBox";
import Categories from "../../pages/category";
import Banner from "../../components/home/Banner";
import Advertising from "../../components/home/Advertising";

import HeaderSection from "../../components/header/HeaderSection";
import CartDrawer from "../cart/CartDrawer";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="top-page">
      <Link
        className="position-absolute"
        to="#"
        // onclick="cartopen()"
      >
        <CartDrawer />
      </Link>
      <HeaderSection />

      <div className="main-content-area">
        <Banner />
        <Advertising />
        <Categories />
        <TrendingProducts />
        <Advertisement />
        <RecommendProducts />

        <Testinominal />
        <InfoBox />
        {/* <ProductDetailPopup /> */}

        <Footer />
      </div>

      <Link to="#top-page" className="to-top js-scroll-trigger">
        <span>
          <i className="fas fa-arrow-up"></i>
        </span>
      </Link>
    </div>
  );
}
