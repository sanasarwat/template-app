import React from "react";
import ProductCard from "../../../pages/products/ProductCard";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { products } from "../../../data/products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Grid, Box } from "@material-ui/core";

export default function ListingProducts() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="recomended-product-section pb-5">
      <div className="container">
        <div className="section-heading">
          <h4 className="heading-title">
            <span className="heading-circle"></span> We Recommend You
          </h4>
        </div>

        <div className="section-wrapper">
          {/* <!-- Add Arrows --> */}
          <div className="slider-btn-group">
            <div className="slider-btn-prev trending-slider-prev">
              <ArrowBackIosIcon />
            </div>
            <div className="slider-btn-next trending-slider-next">
              <ArrowForwardIosIcon />
            </div>
          </div>
          <div className="mlr-20">
            <div className="recommend-product-container">
              <div className="swiper-wrapper">
                <Grid item md={12} sm={12} lg={12} xs={12}>
                  <Slider {...settings}>
                    {products.map((product) => (
                      <Box key={product.id}>
                        <ProductCard product={product} />
                      </Box>
                    ))}
                  </Slider>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pt-3">
        <Link to="product-list.html" className="more-product-btn">
          More Products
        </Link>
      </div>
    </section>
  );
}
