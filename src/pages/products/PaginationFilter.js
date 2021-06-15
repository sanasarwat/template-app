import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";

export default function PaginationFilter() {
  const [page, setPage] = React.useState(1);
  return (
    <div>
      <div class="col-12 pt--30">
        <ul class="pagination justify-content-center justify-content-lg-end">
          <li>
            <a class="d-flex" href="#">
              <i class="icon fas fa-angle-left"></i>
              <span class="text">Prev</span>
            </a>
          </li>
          <li class="d-none d-md-block">
            <a href="#">1</a>
          </li>
          <li class="d-none d-md-block">
            <a href="#">2</a>
          </li>
          <li class="d-none d-md-block">
            <a class="active" href="#">
              3
            </a>
          </li>
          <li class="d-none d-md-block">
            <a href="#">4</a>
          </li>
          <li class="d-none d-md-block">
            <a href="#">5</a>
          </li>
          <li>
            <a class="d-flex" href="#">
              {" "}
              <span class="text">Next</span>
              <i class="icon fas fa-angle-right"></i>
            </a>
          </li>
        </ul>
      </div>
      <Grid container justify="center">
        {page}
        <Pagination
          count={5}
          color="primary"
          shape="rounded"
          defaultPage={page}
          showLastButton={true}
          showFirstButton={true}
          onChange={(e, value) => setPage(value)}
        />
      </Grid>
    </div>
  );
}
