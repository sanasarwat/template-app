import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function PaginationFilter() {
  const [page, setPage] = React.useState(1);
  return (
    <div>
      <div className="col-12 pt--30">
        <ul className="pagination justify-content-center justify-content-lg-end">
          <li>
            <Link className="d-flex" to="#">
              <i className="icon fas fa-angle-left"></i>
              <span className="text">Prev</span>
            </Link>
          </li>
          <li className="d-none d-md-block">
            <Link to="#">1</Link>
          </li>
          <li className="d-none d-md-block">
            <Link to="#">2</Link>
          </li>
          <li className="d-none d-md-block">
            <Link className="active" to="#">
              3
            </Link>
          </li>
          <li className="d-none d-md-block">
            <Link to="#">4</Link>
          </li>
          <li className="d-none d-md-block">
            <Link to="#">5</Link>
          </li>
          <li>
            <Link className="d-flex" to="#">
              {" "}
              <span className="text">Next</span>
              <i className="icon fas fa-angle-right"></i>
            </Link>
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
