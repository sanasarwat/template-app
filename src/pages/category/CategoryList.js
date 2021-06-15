import React from "react";
import CategoryCards from "./CategoryCards";
import { category } from "../../data/category";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Grid, Box } from "@material-ui/core";

export default function CategoryList() {
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
    <div>
      <section class="catagory-section">
        <div class="container p-lg-0">
          <div class="section-heading">
            <h4 class="heading-title">
              <span class="heading-circle green"></span> Products Catagories
            </h4>
          </div>

          <div class="section-wrapper">
            {/* <!-- Add Arrows --> */}
            <div class="slider-btn-group">
              <div class="slider-btn-prev catagory-slider-prev">
                <ArrowBackIosIcon />
              </div>
              <div class="slider-btn-next catagory-slider-next">
                <ArrowForwardIosIcon />
              </div>
            </div>
            <div class="catagory-container">
              <div class="swiper-wrapper">
                <Grid md={12} sm={12} lg={12} xs={12} spacing={13}>
                  <Slider {...settings}>
                    {category.map((category) => (
                      <Box key={category.id}>
                        <CategoryCards category={category} />
                      </Box>
                    ))}
                  </Slider>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
