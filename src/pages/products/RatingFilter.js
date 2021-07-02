import React from "react";
import { Grid, Box } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import * as TiIcons from "react-icons/ti";

export default function RatingFilter(props) {
  const { selectedRating, setSelectedRating } = props;
  return (
    <div>
      <div className="widget">
        <h4 className="widget-title d-none d-lg-block">Filter by Rating </h4>
        <a
          className="widget-title d-lg-none"
          data-toggle="collapse"
          href="#scatagory-widget03"
          role="button"
          aria-expanded="false"
          aria-controls="scatagory-widget03"
        >
          Filte by Rating <i className="fas fa-angle-down"></i>
        </a>
        <div className="widget-wrapper" id="scatagory-widget03">
          <div className="rating  align-items-center">
            {[5, 4, 3, 2, 1].map((rating) => (
              <Grid
                container
                key={rating}
                onClick={() => setSelectedRating(rating)}
              >
                <Rating
                  icon={<TiIcons.TiStarFullOutline fontSize="inherit" />}
                  name="read-only"
                  value={rating}
                  readOnly
                  style={{
                    color: rating === selectedRating ? "#ff3d47" : "",
                  }}
                />

                <Box ml={3}>
                  {rating === 5 ? 5.0 : rating.toFixed(1) + " +"}
                </Box>
              </Grid>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
